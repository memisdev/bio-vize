# Fill Blanks Conversion Report

- Text-input modelinden 5 şıklı cloze modeline dönüştürülen soru sayısı: 74
- Prompt yeniden yazılan soru sayısı: 0
- Şıkları tamamen yeniden tasarlanan soru sayısı: 74
- Kapsam doğrulaması: Tüm kayıtlar midterm

## PDF Bazlı Dağılım
- Karbonhidratlar ve Glikobiyoloji.pdf: 28
- Lipitler.pdf: 23
- Nükleotidler Ve Nükleik Asitler.pdf: 23

## Ortadan Kaldırılan Eski Problemler
- Serbest metin exact-match yüzünden doğru bilginin yanlış sayılması
- accepted_answers varyantlarını sürekli genişletme gereksinimi
- Normalization kurallarından doğan bakım yükü ve görünmez eşleşme karmaşası
- Kısa cevaplarda biçimsel farkın akademik doğruluğu gölgelemesi

## UI Dönüşümü
- Serbest metin input kaldırıldı; akış artık şık seçimi ve `Kontrol Et` ile çalışır.
- Global header ve alt navigasyon çıkarıldı; çözüm yüzeyi focus-mode karta dönüştürüldü.
- Filtreler ve ilerleme özeti ikincil sheet içine taşındı; soru ekranı tek kolon ve mobil öncelikli kaldı.
- Şık kartları, geri bildirim alanı ve açıklama ritmi mevcut test çözüm ekranıyla hizalandı.
