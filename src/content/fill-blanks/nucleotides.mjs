import { makeFillBlank, optionSet } from "./helpers.mjs";

const sourcePdf = "Nükleotidler Ve Nükleik Asitler.pdf";
const sourceTopic = "Nükleotidler ve nükleik asitler";

const fb = (config) =>
  makeFillBlank({
    sourcePdf,
    sourceTopic,
    ...config
  });

export const nucleotideFillBlanks = [
  fb({
    id: "FB-NUC-001",
    sourceSubtopic: "Nükleotidlerin temel işlevleri",
    sourcePages: [4, 5],
    difficulty: "Kolay",
    promptText:
      "Hücresel enerji aktarımında merkezde yer alan temel nükleotid _____dir.",
    options: optionSet("ATP", "GTP", "CTP", "NAD", "cAMP"),
    correctCompletion: "ATP",
    explanation:
      "Nükleotidlerin temel işlevleri anlatılırken enerji aktarımının en tipik örneği olarak ATP verilir.",
    learningObjective:
      "Nükleotidlerin enerji aktarımındaki temel örneğini tanımak.",
    tags: ["ATP", "Enerji", "Nükleotid işlevi"]
  }),
  fb({
    id: "FB-NUC-002",
    sourceSubtopic: "Pürin, pirimidin ve pentoz yapısı",
    sourcePages: [6],
    difficulty: "Kolay",
    promptText:
      "Adenin ve guanin yapısal olarak _____ baz sınıfına girer.",
    options: optionSet("Pirimidin", "Pürin", "Nükleozit", "İmidazol", "Piridin"),
    correctCompletion: "Pürin",
    explanation:
      "Azotlu bazlar iki ana sınıfa ayrılır; adenin ve guanin pürin türevleridir.",
    learningObjective:
      "Pürin ve pirimidin sınıflamasını baz örnekleri üzerinden kurmak.",
    tags: ["Pürin", "Adenin", "Guanin"]
  }),
  fb({
    id: "FB-NUC-003",
    sourceSubtopic: "Pürin, pirimidin ve pentoz yapısı",
    sourcePages: [12],
    difficulty: "Orta",
    promptText:
      "DNA'nın tekrarlayan birimlerinde bulunan pentoz şekeri 2'-_____ -D-ribozdur.",
    options: optionSet("Amino", "Deoksi", "Uronik", "Fosfo", "Dehidro"),
    correctCompletion: "Deoksi",
    explanation:
      "DNA'daki pentoz 2'-deoksi-D-ribozdur; RNA'daki karşılığı ise D-ribozdur.",
    learningObjective:
      "DNA ve RNA'daki pentozları birbirinden ayırt etmek.",
    tags: ["Pentoz", "Deoksiriboz", "DNA"]
  }),
  fb({
    id: "FB-NUC-004",
    sourceSubtopic: "Fosfodiester bağları ve yönlülük",
    sourcePages: [19],
    difficulty: "Kolay",
    promptText:
      "Ardışık nükleotidleri omurgada birbirine bağlayan bağlantı _____ bağıdır.",
    options: optionSet("Peptit", "Fosfodiester", "Glikozit", "Ester", "Disülfit"),
    correctCompletion: "Fosfodiester",
    explanation:
      "Nükleik asit omurgası, komşu nükleotidleri birbirine bağlayan fosfodiester bağlarıyla kurulur.",
    learningObjective:
      "Nükleik asit omurgasını oluşturan bağ tipini tanımak.",
    tags: ["Fosfodiester bağ", "Omurga", "Yönlülük"]
  }),
  fb({
    id: "FB-NUC-005",
    sourceSubtopic: "Fosfodiester bağları ve yönlülük",
    sourcePages: [19, 20],
    difficulty: "Zor",
    promptText:
      "Nükleik asit zincirlerinin biyokimyasal yönlülüğü standart olarak _____ yönünde ifade edilir.",
    options: optionSet("3'ten 5'e", "5'ten 3'e", "2'den 4'e", "1'den 6'ya", "N'den C'ye"),
    correctCompletion: "5'ten 3'e",
    explanation:
      "5' ve 3' uçlar fosfodiester bağını değil zincirin uçlarını ifade eder; zincir yönlülüğü 5'ten 3'e yazılır.",
    learningObjective:
      "Nükleik asit yönlülüğünü uç adlandırmasıyla ilişkilendirmek.",
    tags: ["Yönlülük", "5'-3'", "Fosfodiester bağ"]
  }),
  fb({
    id: "FB-NUC-006",
    sourceSubtopic: "Baz istiflenmesi ve UV soğurma",
    sourcePages: [26, 31],
    difficulty: "Orta",
    promptText:
      "DNA çift sarmalında aromatik bazların eksene dik biçimde üst üste dizilmesi _____ olarak adlandırılır.",
    options: optionSet("Komplementasyon", "Baz istiflenmesi", "Denatürasyon", "Hidroliz", "Metilasyon"),
    correctCompletion: "Baz istiflenmesi",
    explanation:
      "Baz istiflenmesi, düzlemsel baz halkalarının çift sarmalın içinde istiflenerek yapısal kararlılığa katkı vermesidir.",
    learningObjective:
      "Baz özelliklerinin DNA'nın üç boyutlu yapısına katkısını açıklamak.",
    tags: ["Baz istiflenmesi", "DNA yapısı", "UV soğurma"]
  }),
  fb({
    id: "FB-NUC-007",
    sourceSubtopic: "Chargaff kuralları ve DNA kanıtları",
    sourcePages: [28, 29],
    difficulty: "Orta",
    promptText:
      "Çift sarmallı DNA'da adenin miktarının timine, guaninin sitozine eşit olduğunu ifade eden nicel ilişki _____ kuralı olarak bilinir.",
    options: optionSet("Watson-Crick", "Avery", "Chargaff", "Pauling", "Miescher"),
    correctCompletion: "Chargaff",
    explanation:
      "A=T ve G=C oranları, Chargaff'ın DNA baz bileşimi üzerine ortaya koyduğu temel ilişkidir.",
    learningObjective:
      "Chargaff kurallarını çift sarmal DNA ile ilişkilendirmek.",
    tags: ["Chargaff", "DNA kanıtı", "Baz oranı"]
  }),
  fb({
    id: "FB-NUC-008",
    sourceSubtopic: "Chargaff kuralları ve DNA kanıtları",
    sourcePages: [29, 30],
    difficulty: "Orta",
    promptText:
      "A=T ve G=C oranlarından çıkarılan ana sonuç, DNA zincirlerinin _____ baz eşleşmesiyle bir arada tutulduğudur.",
    options: optionSet("Paralel", "Tamamlayıcı", "İyonik", "Kovalent", "Hidrofobik"),
    correctCompletion: "Tamamlayıcı",
    explanation:
      "Baz oranlarının eşitliği, iki zincirin tamamlayıcı baz eşleşmesi mantığıyla düzenlendiğini destekler.",
    learningObjective:
      "Chargaff oranlarının tamamlayıcı baz eşleşmesi sonucunu nasıl desteklediğini açıklamak.",
    tags: ["Chargaff", "Tamamlayıcı baz eşleşmesi", "DNA"]
  }),
  fb({
    id: "FB-NUC-009",
    sourceSubtopic: "Watson-Crick modeli",
    sourcePages: [31, 32],
    difficulty: "Kolay",
    promptText:
      "Watson-Crick modeline göre DNA'nın iki zinciri birbirine göre _____ düzenlenmiştir.",
    options: optionSet("Koaksiyel", "Antiparalel", "Paralel", "Radyal", "İzotropik"),
    correctCompletion: "Antiparalel",
    explanation:
      "DNA çift sarmalında zincirler zıt yönlülükte ilerler; bu ilişki antiparalellik olarak adlandırılır.",
    learningObjective:
      "Watson-Crick modelinde DNA zincirlerinin birbirine göre konumunu tanımlamak.",
    tags: ["Watson-Crick", "Antiparalel", "DNA yapısı"]
  }),
  fb({
    id: "FB-NUC-010",
    sourceSubtopic: "Watson-Crick modeli",
    sourcePages: [31, 32],
    difficulty: "Orta",
    promptText:
      "Watson-Crick modelinde hidrofobik baz halkaları çift sarmalın _____ kısmında istiflenir.",
    options: optionSet("Dış", "Majör", "İç", "Minör", "Uç"),
    correctCompletion: "İç",
    explanation:
      "Pürin ve pirimidin halkaları hidrofobik yapıları nedeniyle çift sarmalın içinde istiflenir; şeker-fosfat omurgası dıştadır.",
    learningObjective:
      "Watson-Crick modelinde bazların uzaysal yerleşimini açıklamak.",
    tags: ["Watson-Crick", "Baz istiflenmesi", "DNA yapısı"]
  }),
  fb({
    id: "FB-NUC-011",
    sourceSubtopic: "mRNA ve diğer RNA tipleri",
    sourcePages: [36, 38],
    difficulty: "Kolay",
    promptText:
      "Polipeptit dizisini doğrudan şifreleyen RNA türü _____dır.",
    options: optionSet("tRNA", "rRNA", "mRNA", "snRNA", "miRNA"),
    correctCompletion: "mRNA",
    explanation:
      "Mesajcı RNA, genetik bilginin protein dizisine çevrilmesinde doğrudan şablon görevi görür.",
    learningObjective:
      "mRNA'nın diğer RNA türleri içindeki işlevini tanımlamak.",
    tags: ["mRNA", "RNA", "Protein sentezi"]
  }),
  fb({
    id: "FB-NUC-012",
    sourceSubtopic: "mRNA ve diğer RNA tipleri",
    sourcePages: [38],
    difficulty: "Orta",
    promptText:
      "Ökaryotlarda çoğu mesajcı RNA, tek bir polipeptidi kodladığı için _____ olarak tanımlanır.",
    options: optionSet("Halkasal", "Monosistronik", "Polisistronik", "Antiparalel", "Çift iplikli"),
    correctCompletion: "Monosistronik",
    explanation:
      "Ökaryotik mRNA çoğunlukla bir tek polipeptit zinciri için bilgi taşıdığı için monosistronik kabul edilir.",
    learningObjective:
      "Ökaryotik mRNA'nın organizasyon mantığını tanımlamak.",
    tags: ["mRNA", "Monosistronik", "Ökaryot"]
  }),
  fb({
    id: "FB-NUC-013",
    sourceSubtopic: "Denatürasyon, renatürasyon ve Tm",
    sourcePages: [42, 43],
    difficulty: "Kolay",
    promptText:
      "Çift sarmal DNA'nın ısı veya pH etkisiyle zincirlerine ayrılmasına _____ denir.",
    options: optionSet("Hibritleşme", "Denatürasyon", "Renatürasyon", "Ligasyon", "Metilasyon"),
    correctCompletion: "Denatürasyon",
    explanation:
      "Denatürasyon, baz eşleşmeleri ve istiflenmenin bozulmasıyla çift sarmalın açılmasıdır.",
    learningObjective:
      "Nükleik asit denatürasyonunu çift sarmalın çözülmesiyle ilişkilendirmek.",
    tags: ["Denatürasyon", "DNA", "Çift sarmal"]
  }),
  fb({
    id: "FB-NUC-014",
    sourceSubtopic: "Denatürasyon, renatürasyon ve Tm",
    sourcePages: [43],
    difficulty: "Kolay",
    promptText:
      "Ayrılmış iki tamamlayıcı zincirin yeniden çift sarmal oluşturmasına _____ denir.",
    options: optionSet("Alkilasyon", "Renatürasyon", "Denatürasyon", "Deaminasyon", "Ligasyon"),
    correctCompletion: "Renatürasyon",
    explanation:
      "Renatürasyon, tamamlayıcı zincirlerin uygun koşullar geri geldiğinde yeniden eşleşmesidir.",
    learningObjective:
      "Tamamlayıcı zincirlerin yeniden eşleşmesini renatürasyon kavramıyla açıklamak.",
    tags: ["Renatürasyon", "DNA", "Tamamlayıcı zincir"]
  }),
  fb({
    id: "FB-NUC-015",
    sourceSubtopic: "Denatürasyon, renatürasyon ve Tm",
    sourcePages: [46],
    difficulty: "Orta",
    promptText:
      "Bir DNA örneğinin yarısının denatüre olduğu sıcaklık _____ ile gösterilir.",
    options: optionSet("pKa", "Tm", "Km", "Vmax", "Delta G"),
    correctCompletion: "Tm",
    explanation:
      "Tm, DNA parçasının yarısının çözülmüş durumda olduğu sıcaklığı ifade eder.",
    learningObjective:
      "DNA erime sıcaklığını Tm kavramıyla tanımlamak.",
    tags: ["Tm", "Denatürasyon", "Erime sıcaklığı"]
  }),
  fb({
    id: "FB-NUC-016",
    sourceSubtopic: "Hibritleşme",
    sourcePages: [48, 49],
    difficulty: "Orta",
    promptText:
      "Nükleik asitlerde dizi benzerliğini tamamlayıcı baz eşleşmesi üzerinden sınayan süreç _____ olarak adlandırılır.",
    options: optionSet("Replikasyon", "Hibritleşme", "Transkripsiyon", "Ligasyon", "Fosforilasyon"),
    correctCompletion: "Hibritleşme",
    explanation:
      "Hibritleşme, tamamlayıcı nükleik asit dizilerinin birbirini tanıyıp eşleşmesine dayanır.",
    learningObjective:
      "Hibritleşmeyi tamamlayıcı baz eşleşmesi ve dizi benzerliğiyle ilişkilendirmek.",
    tags: ["Hibritleşme", "Dizi benzerliği", "Tamamlayıcı baz eşleşmesi"]
  }),
  fb({
    id: "FB-NUC-017",
    sourceSubtopic: "Deaminasyon ve AP lezyonları",
    sourcePages: [51, 52],
    difficulty: "Orta",
    promptText:
      "Sitozinin spontan deaminasyonu sonucu oluşan baz _____dir.",
    options: optionSet("Timin", "Urasil", "Sitozin", "Adenin", "Hipoksantin"),
    correctCompletion: "Urasil",
    explanation:
      "Deaminasyon sonucunda sitozin amino grubunu kaybeder ve urasile dönüşür.",
    learningObjective:
      "Spontan deaminasyonun baz düzeyindeki sonucunu tanımak.",
    tags: ["Deaminasyon", "Urasil", "Sitozin"]
  }),
  fb({
    id: "FB-NUC-018",
    sourceSubtopic: "Deaminasyon ve AP lezyonları",
    sourcePages: [52, 53],
    difficulty: "Orta",
    promptText:
      "Azotlu bazın hidrolitik olarak kaybedilmesiyle oluşan abazik DNA bölgesi kısaca _____ lezyonu olarak anılır.",
    options: optionSet("ROS", "AP", "Tm", "NAD", "GTP"),
    correctCompletion: "AP",
    explanation:
      "AP lezyonu, apürinik/apirimidin yani bazını kaybetmiş abazik DNA bölgesini ifade eder.",
    learningObjective:
      "Baz kaybı sonrası oluşan abazik bölgeyi AP lezyonu kavramıyla ilişkilendirmek.",
    tags: ["AP lezyonu", "Abazik bölge", "DNA hasarı"]
  }),
  fb({
    id: "FB-NUC-019",
    sourceSubtopic: "UV, radyasyon, alkilleyici ve oksidatif hasar",
    sourcePages: [54],
    difficulty: "Orta",
    promptText:
      "UV ışınlarının DNA'da oluşturduğu tipik lezyon _____ dimeridir.",
    options: optionSet("Pürin", "Pirimidin", "Adenin", "Guanin", "Riboz"),
    correctCompletion: "Pirimidin",
    explanation:
      "UV ışınları bakteri ve insan DNA'sında tipik olarak pirimidin dimerleri oluşturur.",
    learningObjective:
      "UV hasarının DNA'daki tipik lezyonunu tanımak.",
    tags: ["UV", "Pirimidin dimeri", "DNA hasarı"]
  }),
  fb({
    id: "FB-NUC-020",
    sourceSubtopic: "UV, radyasyon, alkilleyici ve oksidatif hasar",
    sourcePages: [58],
    difficulty: "Orta",
    promptText:
      "DNA'daki mutajenik değişimlerin en önemli iç kaynaklarından biri _____ hasardır.",
    options: optionSet("Hidrolitik", "Oksidatif", "Alkalik", "İzotonik", "Anabolik"),
    correctCompletion: "Oksidatif",
    explanation:
      "DNA'daki mutajenik değişimlerin en önemli kaynaklarından biri oksidatif hasardır.",
    learningObjective:
      "Nükleik asit hasarında oksidatif süreçlerin önemini tanımak.",
    tags: ["Oksidatif hasar", "DNA hasarı", "Mutasyon"]
  }),
  fb({
    id: "FB-NUC-021",
    sourceSubtopic: "UV, radyasyon, alkilleyici ve oksidatif hasar",
    sourcePages: [58, 59],
    difficulty: "Zor",
    promptText:
      "Hidroksil radikali, süperoksit ve H2O2 gibi uyarılmış oksijen kaynaklı bileşikler topluca _____ olarak anılır.",
    options: optionSet("RNS", "ROS", "ATP", "GTP", "NAD"),
    correctCompletion: "ROS",
    explanation:
      "Bu reaktif oksijen türleri DNA dahil çok sayıda biyomolekülde oksidatif hasar oluşturabilir.",
    learningObjective:
      "Oksidatif DNA hasarıyla ilişkili reaktif oksijen türlerini ortak başlık altında tanımak.",
    tags: ["ROS", "Oksidatif hasar", "Reaktif oksijen türleri"]
  }),
  fb({
    id: "FB-NUC-022",
    sourceSubtopic: "Nükleotidlerin enerji ve kofaktör rolleri",
    sourcePages: [61],
    difficulty: "Orta",
    promptText:
      "Protein sentezi gibi enerji gerektiren süreçlerde ATP'ye ek olarak sık kullanılan guanin nükleotidi _____dir.",
    options: optionSet("CTP", "GTP", "UTP", "cAMP", "NADH"),
    correctCompletion: "GTP",
    explanation:
      "GTP, ATP dışında enerji aktarımında görev yapan önemli bir nükleotiddir.",
    learningObjective:
      "Enerji aktarımında ATP dışındaki temel nükleotid örneğini tanımak.",
    tags: ["GTP", "Enerji", "Nükleotid"]
  }),
  fb({
    id: "FB-NUC-023",
    sourceSubtopic: "Nükleotidlerin enerji ve kofaktör rolleri",
    sourcePages: [61, 62],
    difficulty: "Orta",
    promptText:
      "Elektron taşınmasına katılan nükleotid türevli kofaktörlerden nikotinamid adenin dinükleotid kısaca _____ olarak yazılır.",
    options: optionSet("FAD", "NAD", "SAM", "CoA", "cAMP"),
    correctCompletion: "NAD",
    explanation:
      "NAD, adenin nükleotidlerini içeren kofaktörler arasında en temel örneklerden biridir.",
    learningObjective:
      "Nükleotid türevli kofaktörlere temel örnek vermek.",
    tags: ["NAD", "Kofaktör", "Elektron taşınması"]
  })
];
