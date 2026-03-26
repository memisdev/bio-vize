const FILL_BLANK_OPTION_LETTERS = ["A", "B", "C", "D", "E"];

function cleanText(value) {
  return String(value || "")
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/\s+([?.,;:])/g, "$1")
    .replace(/\(\s+/g, "(")
    .replace(/\s+\)/g, ")")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function capitalizeStart(value) {
  return value.replace(/^([a-zçğıöşü])/u, (match) => match.toLocaleUpperCase("tr-TR"));
}

function sentenceCase(value) {
  const cleaned = cleanText(value);
  if (/^[a-zçğıöşü][A-Z]/u.test(cleaned)) {
    return cleaned;
  }
  return capitalizeStart(cleaned);
}

function normalizePromptText(value) {
  return capitalizeStart(cleanText(value).replace(/_{3,}/g, "_____"));
}

function normalizeOptionText(value) {
  return cleanText(value);
}

function normalizeTags(tags) {
  const seen = new Set();
  const normalized = [];

  for (const tag of tags || []) {
    const cleaned = sentenceCase(tag).replace(/[.?!]$/u, "");
    const key = cleaned.toLocaleLowerCase("tr-TR");
    if (!cleaned || seen.has(key)) continue;
    seen.add(key);
    normalized.push(cleaned);
  }

  return normalized;
}

function normalizeOptions(options) {
  return Object.fromEntries(
    FILL_BLANK_OPTION_LETTERS.map((letter) => [letter, normalizeOptionText(options?.[letter])])
  );
}

function findCorrectAnswer(options, correctCompletion) {
  return FILL_BLANK_OPTION_LETTERS.find(
    (letter) => normalizeOptionText(options?.[letter]) === normalizeOptionText(correctCompletion)
  );
}

export function optionSet(...values) {
  if (values.length !== FILL_BLANK_OPTION_LETTERS.length) {
    throw new Error(`optionSet expects ${FILL_BLANK_OPTION_LETTERS.length} values.`);
  }

  return Object.fromEntries(
    FILL_BLANK_OPTION_LETTERS.map((letter, index) => [letter, normalizeOptionText(values[index])])
  );
}

export function makeFillBlank({
  id,
  sourcePdf,
  sourceTopic,
  sourceSubtopic,
  sourcePages,
  difficulty,
  promptText,
  options,
  correctAnswer,
  correctCompletion,
  explanation,
  learningObjective,
  tags = []
}) {
  const normalizedOptions = normalizeOptions(options);
  const normalizedCompletion = normalizeOptionText(correctCompletion);
  const resolvedCorrectAnswer = correctAnswer || findCorrectAnswer(normalizedOptions, normalizedCompletion);

  if (!resolvedCorrectAnswer || !normalizedOptions[resolvedCorrectAnswer]) {
    throw new Error(`Missing correct option mapping for ${id}.`);
  }

  if (normalizedOptions[resolvedCorrectAnswer] !== normalizedCompletion) {
    throw new Error(`correctCompletion mismatch for ${id}.`);
  }

  return {
    id,
    mode: "fill_blank",
    exam_scope: "midterm",
    source_pdf: sourcePdf,
    source_topic: sentenceCase(sourceTopic),
    source_subtopic: sentenceCase(sourceSubtopic || sourceTopic),
    source_pages: [...new Set((sourcePages || []).map(Number).filter(Number.isFinite))].sort((a, b) => a - b),
    difficulty,
    prompt_text: normalizePromptText(promptText),
    options: normalizedOptions,
    correct_answer: resolvedCorrectAnswer,
    correct_completion: normalizedCompletion,
    explanation: sentenceCase(explanation),
    learning_objective: sentenceCase(learningObjective),
    tags: normalizeTags([sourceTopic, sourceSubtopic || sourceTopic, ...(tags || [])])
  };
}

export { FILL_BLANK_OPTION_LETTERS };
