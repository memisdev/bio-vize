import { makeFillBlank, optionSet } from "./helpers.mjs";

const sourcePdf = "Lipitler.pdf";
const sourceTopic = "Lipitler";

const fb = (config) =>
  makeFillBlank({
    sourcePdf,
    sourceTopic,
    ...config
  });

export const lipidFillBlanks = [
  fb({
    id: "FB-LIP-001",
    sourceSubtopic: "Lipitlerin genel özelliği",
    sourcePages: [2],
    difficulty: "Kolay",
    promptText:
      "Biyolojik lipitleri ortak bir sınıfta toplayan belirleyici fizikokimyasal özellik, suda büyük ölçüde _____ olmalarıdır.",
    options: optionSet("Çözünmez", "İyonik", "Uçucu", "Amfoterik", "Aromatik"),
    correctCompletion: "Çözünmez",
    explanation:
      "Biyolojik lipitlerin ortak ve ayırt edici özelliği suda çözünmemeleridir.",
    learningObjective:
      "Lipitlerin ortak fizikokimyasal özelliğini tanımlamak.",
    tags: ["Lipit", "Su çözünmezliği", "Fizikokimyasal özellik"]
  }),
  fb({
    id: "FB-LIP-002",
    sourceSubtopic: "Yağ asidi yapısı ve X:Y gösterimi",
    sourcePages: [6],
    difficulty: "Kolay",
    promptText:
      "Yağ asidi gösteriminde X:Y notasyonundaki X değeri zincirdeki toplam _____ sayısını verir.",
    options: optionSet("Azot", "Fosfat", "Karbon", "Oksijen", "Kükürt"),
    correctCompletion: "Karbon",
    explanation:
      "X:Y notasyonunda X, zincir uzunluğunu yani toplam karbon sayısını belirtir.",
    learningObjective:
      "X:Y yağ asidi gösterimindeki temel sayıların neyi ifade ettiğini yorumlamak.",
    tags: ["Yağ asidi", "X:Y gösterimi", "Karbon sayısı"]
  }),
  fb({
    id: "FB-LIP-003",
    sourceSubtopic: "Yağ asidi yapısı ve X:Y gösterimi",
    sourcePages: [6, 7],
    difficulty: "Kolay",
    promptText:
      "18:1 gösterimindeki Y değeri, zincirdeki _____ bağ sayısını belirtir.",
    options: optionSet("Ester", "Çift", "Tek", "Amid", "Eter"),
    correctCompletion: "Çift",
    explanation:
      "Y değeri, yağ asidi zincirinde bulunan karbon-karbon çift bağlarının sayısını gösterir.",
    learningObjective:
      "X:Y yağ asidi gösterimindeki temel sayıların neyi ifade ettiğini yorumlamak.",
    tags: ["Yağ asidi", "X:Y gösterimi", "Çift bağ"]
  }),
  fb({
    id: "FB-LIP-004",
    sourceSubtopic: "Elzem omega-3 yağ asitleri",
    sourcePages: [9, 10],
    difficulty: "Orta",
    promptText:
      "İnsanlar için elzem kabul edilen başlıca omega-3 yağ asidi _____ asittir.",
    options: optionSet("Linoleik", "Oleik", "Alfa-linolenik", "Palmitik", "Araşidonik"),
    correctCompletion: "Alfa-linolenik",
    explanation:
      "İnsan için elzem omega-3 yağ asidi olarak alfa-linolenik asit öne çıkar.",
    learningObjective:
      "Elzem omega-3 yağ asitlerinden temel örneği tanımak.",
    tags: ["Omega-3", "Elzem yağ asidi", "ALA"]
  }),
  fb({
    id: "FB-LIP-005",
    sourceSubtopic: "Elzem omega-3 yağ asitleri",
    sourcePages: [10],
    difficulty: "Orta",
    promptText:
      "Metil ucundan sayıldığında ilk çift bağ üçüncü karbonda ise yağ asidi _____-3 olarak sınıflanır.",
    options: optionSet("Delta", "Omega", "Alfa", "Beta", "Cis"),
    correctCompletion: "Omega",
    explanation:
      "Omega sınıflaması, ilk çift bağın metil ucuna göre konumuna dayanır; üçüncü karbondaki ilk çift bağ omega-3 ailesini tanımlar.",
    learningObjective:
      "Omega sınıflamasını metil ucuna göre yapılan sayımla ilişkilendirmek.",
    tags: ["Omega-3", "Yağ asidi", "Sınıflandırma"]
  }),
  fb({
    id: "FB-LIP-006",
    sourceSubtopic: "Triaçilgliseroller",
    sourcePages: [18],
    difficulty: "Kolay",
    promptText:
      "Gliserole üç yağ asidinin esterleşmesiyle oluşan en basit depo lipitleri _____ olarak adlandırılır.",
    options: optionSet("Mumlar", "Triaçilgliseroller", "Steroller", "Gliserofosfolipitler", "Sfingolipitler"),
    correctCompletion: "Triaçilgliseroller",
    explanation:
      "Yağ asitlerinden oluşan en basit lipitler triaçilgliseroller olarak adlandırılır.",
    learningObjective:
      "Triaçilgliserolleri temel depo lipidi olarak tanımlamak.",
    tags: ["Triaçilgliserol", "Depo lipidi", "Ester"]
  }),
  fb({
    id: "FB-LIP-007",
    sourceSubtopic: "Triaçilgliseroller",
    sourcePages: [18],
    difficulty: "Orta",
    promptText:
      "Üç yağ asidinin de aynı olduğu triaçilgliseroller biyokimyada _____ triaçilgliserol olarak adlandırılır.",
    options: optionSet("Karışık", "Basit", "Amfipatik", "Siklik", "Dallanmış"),
    correctCompletion: "Basit",
    explanation:
      "Aynı yağ asitlerinden oluşan moleküller basit triaçilgliserol sınıfına girer.",
    learningObjective:
      "Basit ve karışık triaçilgliserolleri içeriklerine göre ayırt etmek.",
    tags: ["Triaçilgliserol", "Basit lipit", "Sınıflandırma"]
  }),
  fb({
    id: "FB-LIP-008",
    sourceSubtopic: "Triaçilgliseroller",
    sourcePages: [18, 19],
    difficulty: "Orta",
    promptText:
      "Gliserolün üç palmitatla esterleşmesi sonucu oluşan basit triaçilgliserol örneği _____dir.",
    options: optionSet("Tristearin", "Triolein", "Tripalmitin", "Fosfatidilkolin", "Seramid"),
    correctCompletion: "Tripalmitin",
    explanation:
      "Üç palmitik asit içeren basit triaçilgliserol için tipik örnek tripalmitindir.",
    learningObjective:
      "Triaçilgliserol adlandırmasında yağ asidi bileşiminin nasıl kullanıldığını tanımak.",
    tags: ["Triaçilgliserol", "Tripalmitin", "Adlandırma"]
  }),
  fb({
    id: "FB-LIP-009",
    sourceSubtopic: "Kısmi hidrojenleme ve trans yağlar",
    sourcePages: [25, 26],
    difficulty: "Orta",
    promptText:
      "Bitkisel yağların kısmi hidrojenlenmesi, cis çift bağların bir kısmını _____ yapıya dönüştürebilir.",
    options: optionSet("Cis", "Trans", "Satüre", "Omega", "Konjuge"),
    correctCompletion: "Trans",
    explanation:
      "Kısmi hidrojenleme işlemi sırasında bazı cis çift bağlar trans konfigürasyona izomerleşebilir.",
    learningObjective:
      "Kısmi hidrojenlemenin trans yağ oluşumuyla ilişkisini açıklamak.",
    tags: ["Kısmi hidrojenleme", "Trans yağ", "Doymamış yağ asidi"]
  }),
  fb({
    id: "FB-LIP-010",
    sourceSubtopic: "Kısmi hidrojenleme ve trans yağlar",
    sourcePages: [25],
    difficulty: "Orta",
    promptText:
      "Kısmi hidrojenlemenin teknoloji açısından tercih edilmesinin başlıca nedeni, yağların oksidasyona bağlı _____ riskini azaltmaktır.",
    options: optionSet("Esterleşme", "Emülsiyon", "Bozulma", "Sülfatlanma", "İzomerleşme"),
    correctCompletion: "Bozulma",
    explanation:
      "Çift bağların kırılmasına bağlı oksidatif bozulma raf ömrü sorununa yol açar; hidrojenleme bu riski azaltmak için uygulanır.",
    learningObjective:
      "Kısmi hidrojenlemenin neden uygulandığını oksidatif bozulma bağlamında yorumlamak.",
    tags: ["Kısmi hidrojenleme", "Raf ömrü", "Bozulma"]
  }),
  fb({
    id: "FB-LIP-011",
    sourceSubtopic: "Mumlar",
    sourcePages: [27],
    difficulty: "Kolay",
    promptText:
      "Uzun zincirli bir yağ asidinin uzun zincirli bir alkolle esterinden oluşan koruyucu lipitler _____ olarak adlandırılır.",
    options: optionSet("Mumlar", "Triaçilgliseroller", "Steroller", "Sfingolipitler", "Gliserofosfolipitler"),
    correctCompletion: "Mumlar",
    explanation:
      "Mumlar, uzun zincirli asit ve alkollerin esterlerinden oluşan koruyucu yüzey lipitleridir.",
    learningObjective:
      "Mumları yapı bakımından diğer depo lipitlerinden ayırt etmek.",
    tags: ["Mum", "Ester", "Koruyucu lipit"]
  }),
  fb({
    id: "FB-LIP-012",
    sourceSubtopic: "Yapısal lipitlerin genel mantığı",
    sourcePages: [28],
    difficulty: "Orta",
    promptText:
      "Zar lipitlerinin suyla ve birbirleriyle etkileşerek çift tabaka oluşturabilmesinin temel nedeni bu moleküllerin _____ karakter taşımasıdır.",
    options: optionSet("Hidrofobik", "Amfipatik", "Kovalent", "Aromatik", "Polimerik"),
    correctCompletion: "Amfipatik",
    explanation:
      "Hidrofilik baş ve hidrofobik kuyruk içeren amfipatik yapı, zar çift tabakasının spontan oluşumunu mümkün kılar.",
    learningObjective:
      "Yapısal zar lipitlerinin çift tabaka oluşturma mantığını açıklamak.",
    tags: ["Amfipatik", "Zar lipidi", "Çift tabaka"]
  }),
  fb({
    id: "FB-LIP-013",
    sourceSubtopic: "Gliserofosfolipitler",
    sourcePages: [33],
    difficulty: "Orta",
    promptText:
      "Gliserofosfolipitlerin temel iskeleti olan fosforillenmiş ara bileşik _____ asittir.",
    options: optionSet("Palmitik", "Fosfatidik", "Gliserik", "Oleik", "Propiyonik"),
    correctCompletion: "Fosfatidik",
    explanation:
      "Gliserofosfolipitlerin ana bileşiği fosfatidik asittir.",
    learningObjective:
      "Gliserofosfolipitleri omurga bileşeni üzerinden tanımlamak.",
    tags: ["Gliserofosfolipit", "Fosfatidik asit", "Omurga"]
  }),
  fb({
    id: "FB-LIP-014",
    sourceSubtopic: "Gliserofosfolipitler",
    sourcePages: [33, 34],
    difficulty: "Orta",
    promptText:
      "Gliserofosfolipitlerde sınıf adlandırması çoğunlukla fosfat grubuna bağlı _____ göre yapılır.",
    options: optionSet("Yağ asidine", "Polar alkole", "Sterol çekirdeğine", "Eter bağına", "İzopren zincirine"),
    correctCompletion: "Polar alkole",
    explanation:
      "Adlandırma, fosfat grubuna bağlı polar alkol ya da baş grubun kimliğine göre kurulur.",
    learningObjective:
      "Gliserofosfolipit sınıflarını baş grup mantığı üzerinden ayırt etmek.",
    tags: ["Gliserofosfolipit", "Baş grup", "Adlandırma"]
  }),
  fb({
    id: "FB-LIP-015",
    sourceSubtopic: "Galaktolipitler ve sülfolipitler",
    sourcePages: [38],
    difficulty: "Orta",
    promptText:
      "Bitki kloroplast zarlarında baskın olup bir veya iki galaktoz taşıyan yapısal lipitler _____ olarak adlandırılır.",
    options: optionSet("Sfingomiyelinler", "Galaktolipitler", "Steroller", "Mumlar", "Plazmalojenler"),
    correctCompletion: "Galaktolipitler",
    explanation:
      "Kloroplast zarlarında galaktoz taşıyan yapısal lipit sınıfı galaktolipitlerdir.",
    learningObjective:
      "Bitkisel zar lipitleri içinde galaktolipitleri tanımak.",
    tags: ["Galaktolipit", "Kloroplast", "Bitki zarı"]
  }),
  fb({
    id: "FB-LIP-016",
    sourceSubtopic: "Arke zar lipitleri",
    sourcePages: [40],
    difficulty: "Orta",
    promptText:
      "Arkelerde ekstrem koşullara dayanıklılığı artıran temel bağ tipi _____ bağıdır.",
    options: optionSet("Amid", "Ester", "Eter", "Peptit", "Disülfit"),
    correctCompletion: "Eter",
    explanation:
      "Arke zar lipitlerinde ester yerine eter bağları bulunur; bu durum kimyasal dayanıklılığı artırır.",
    learningObjective:
      "Arke zar lipitlerini bağ tipi üzerinden diğer zar lipitlerinden ayırmak.",
    tags: ["Arke", "Eter bağı", "Zar lipidi"]
  }),
  fb({
    id: "FB-LIP-017",
    sourceSubtopic: "Arke zar lipitleri",
    sourcePages: [40, 41],
    difficulty: "Zor",
    promptText:
      "Arke zar lipitlerinde eter bağlarının tercih edilmesi, bu bağların hidrolize karşı daha _____ olmasına katkı sağlar.",
    options: optionSet("Polar", "Dayanıklı", "Dallanmış", "İndirgen", "Esnek"),
    correctCompletion: "Dayanıklı",
    explanation:
      "Eter bağları, ekstrem koşullarda hidrolize karşı daha dirençlidir.",
    learningObjective:
      "Arke zar lipitlerindeki eter bağlarının biyokimyasal sonucunu açıklamak.",
    tags: ["Arke", "Hidroliz", "Eter bağı"]
  }),
  fb({
    id: "FB-LIP-018",
    sourceSubtopic: "Sfingolipitler",
    sourcePages: [43, 44],
    difficulty: "Kolay",
    promptText:
      "Sfingolipitlerin karakteristik amino alkol omurgası _____ olarak adlandırılır.",
    options: optionSet("Kolesterol", "Gliserol", "Sfingozin", "Etanolamin", "Skualen"),
    correctCompletion: "Sfingozin",
    explanation:
      "Sfingolipitler, gliserol yerine sfingozin omurgası taşıyan zar lipitleridir.",
    learningObjective:
      "Sfingolipitleri omurga yapısı üzerinden tanımak.",
    tags: ["Sfingolipit", "Sfingozin", "Omurga"]
  }),
  fb({
    id: "FB-LIP-019",
    sourceSubtopic: "Sfingolipitler",
    sourcePages: [45],
    difficulty: "Orta",
    promptText:
      "Bir yağ asidinin sfingozine amid bağıyla bağlanmasıyla oluşan çekirdek yapı _____dir.",
    options: optionSet("Sfingomiyelin", "Seramid", "Kolesterol", "Plazmalojen", "Fosfatidat"),
    correctCompletion: "Seramid",
    explanation:
      "Seramid, sfingozin ile yağ asidinin amid bağı kurduğu temel sfingolipit çekirdeğidir.",
    learningObjective:
      "Sfingolipit çekirdeğini oluşturan temel ara yapıyı tanımak.",
    tags: ["Sfingolipit", "Seramid", "Amid bağı"]
  }),
  fb({
    id: "FB-LIP-020",
    sourceSubtopic: "Steroller",
    sourcePages: [48],
    difficulty: "Kolay",
    promptText:
      "Sterollerin ortak yapısal çekirdeği, kaynaşmış dört halkadan oluşan _____ çekirdektir.",
    options: optionSet("Steroid", "Porfirin", "İzopren", "Gliserol", "Pentoz"),
    correctCompletion: "Steroid",
    explanation:
      "Steroller, üçü altı üyeli biri beş üyeli dört kaynaşmış halkadan oluşan steroid çekirdeği taşır.",
    learningObjective:
      "Sterollerin ortak yapısal çekirdeğini tanımlamak.",
    tags: ["Sterol", "Steroid çekirdek", "Yapı"]
  }),
  fb({
    id: "FB-LIP-021",
    sourceSubtopic: "Steroller",
    sourcePages: [48, 49],
    difficulty: "Kolay",
    promptText:
      "Hayvan dokularında en önemli sterol örneği _____dür.",
    options: optionSet("Kolesterol", "Ergosterol", "Lanosterol", "β-sitosterol", "Dolikol"),
    correctCompletion: "Kolesterol",
    explanation:
      "Hayvansal dokulardaki en önemli sterol kolesteroldür.",
    learningObjective:
      "Steroller arasında hayvanlarda baskın örneği tanımak.",
    tags: ["Sterol", "Kolesterol", "Hayvan zarı"]
  }),
  fb({
    id: "FB-LIP-022",
    sourceSubtopic: "Lipit türevli vitaminler ve kinonlar",
    sourcePages: [54, 55],
    difficulty: "Orta",
    promptText:
      "Yakındaki hücrelere mesaj taşıyan eikosanoit sınıfları arasında prostaglandinler, tromboksanlar ve _____ler yer alır.",
    options: optionSet("Lipoksin", "Lökotrien", "Prostasiklin", "Seramid", "Sterol"),
    correctCompletion: "Lökotrien",
    explanation:
      "Eikosanoitlerin üç ana sınıfı prostaglandinler, tromboksanlar ve lökotrienlerdir.",
    learningObjective:
      "Eikosanoid sınıflarını temel örnekleriyle tanımak.",
    tags: ["Eikosanoid", "Lökotrien", "Sinyal lipidi"]
  }),
  fb({
    id: "FB-LIP-023",
    sourceSubtopic: "Lipit türevli vitaminler ve kinonlar",
    sourcePages: [67, 68],
    difficulty: "Orta",
    promptText:
      "Mitokondriyal elektron aktarımında görev yapan lipit türevli kinon taşıyıcı _____ olarak bilinir.",
    options: optionSet("Retinal", "Dolikol", "Ubikinon", "Skualen", "Lanosterol"),
    correctCompletion: "Ubikinon",
    explanation:
      "Ubikinon, lipit türevli kinon yapısıyla elektron taşıyan hareketli mitokondriyal bileşiktir.",
    learningObjective:
      "Lipit türevli kinonların biyokimyasal işlevine temel örnek vermek.",
    tags: ["Ubikinon", "Koenzim Q", "Kinon"]
  })
];
