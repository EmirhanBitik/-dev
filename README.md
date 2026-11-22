# Yazılım Araçları Rehberi

BPR201 İnternet Tabanlı Programlama dersi, Haftalık Proje Ödevi 2.

## Proje amacı

Yazılım geliştirmeye yeni başlayan kişiler için sık kullanılan beş aracı tanıtan, üç sayfalık statik bir web sitesidir. Her araç için kategori, kullanım alanı ve örnek bir görev verilir. İçerikler sayfasındaki arama kutusu, yazılan kelimeyle başlığı eşleşen kartları filtreler.

Hedef kitle: programlamaya yeni başlayan öğrenciler ve ilk projelerini yapan geliştiriciler.

## Sayfalar

- `index.html`: Ana sayfa. Site adı, hedef kitle ve içerik listesine bağlantı.
- `icerikler.html`: Beş araç kartı ve başlığa göre arama (label'lı arama kutusu, sonuç sayacı, boş sonuç mesajı, Temizle düğmesi).
- `hakkinda.html`: Konunun seçilme gerekçesi ve sitenin ziyaretçiye nasıl yardımcı olduğu.

Üç sayfa da aynı üst menüyü kullanır.

## Dosyalar

- `style.css`: Ortak görünüm, mobil düzen ve klavye odağı.
- `script.js`: Arama filtresi, sayaç, boş sonuç mesajı ve Temizle davranışı.
- `AI_NOTLARI.md`: Yapay zekâ destekli geliştirme sırasında kullanılan prompt'lar ve kod açıklamaları.
- `TEST_NOTLARI.md`: Test girdileri, beklenen ve gerçekleşen sonuçlar.

## Çalıştırma

Sunucu gerektirmez. `index.html` dosyasını bir tarayıcıda açmanız yeterlidir.

GitHub Codespaces kullanıyorsanız depoyu Codespace içinde açın ve `index.html` dosyasını Live Server ile çalıştırabilirsiniz.

## Arama davranışı

- Arama yalnızca kart başlıklarına bakar; açıklama ve kategori metinlerine bakmaz.
- Eşleşme yazarken anında güncellenir.
- Büyük/küçük harf ve kenar boşlukları önemli değildir. Türkçe aksanlar (ç, ş, ğ, ö, ü) da eşleşmeyi etkilemez.
- Sorgu boşsa veya yalnızca boşluk içeriyorsa tüm kartlar görünür.

## Depo bağlantısı

GitHub deposu: [BURAYA GITHUB BAĞLANTINIZI YAZIN]

Öğretim elemanının erişebildiği bir bağlantı olmalıdır.
