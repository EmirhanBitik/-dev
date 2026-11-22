# Test notları

Kart sayısı beştir: Visual Studio Code, Git, Figma, Postman, Trello.

## Mantık testleri (Node.js ile, `script.js` içindeki filtre kuralıyla)

Bu testler arama kuralının kendisini doğrular. Tarayıcı testlerinin yerini tutmaz.

| # | Girdi | Beklenen sonuç | Gerçekleşen sonuç | Karar |
|---|---|---|---|---|
| L1 | `visual` | Yalnızca "Visual Studio Code"; sayaç 1 | 1 sonuç: Visual Studio Code | Geçti |
| L2 | `VISUAL  ` (büyük harf, sonda boşluk) | Aynı sonuç | 1 sonuç: Visual Studio Code | Geçti |
| L3 | `GIT` | Yalnızca "Git" | 1 sonuç: Git | Geçti |
| L4 | `xyzabc` | Sayaç 0; boş sonuç mesajı | 0 sonuç | Geçti |
| L5 | `   ` (yalnızca boşluk) | Tüm kartlar | 5 sonuç | Geçti |
| L6 | `  visual   studio  ` | Yalnızca "Visual Studio Code" | 1 sonuç: Visual Studio Code | Geçti |

## Tarayıcı testleri

Her satır için `icerikler.html` sayfasını tarayıcıda açıp işlemi yapın.

| # | Test | Beklenen sonuç | Gerçekleşen sonuç | Karar |
|---|---|---|---|---|
| 1 | Arama kutusuna `Trello` yazın | Yalnızca Trello kartı görünür; sayaç "1 sonuç gösteriliyor" | | |
| 2 | `POSTMAN` yazın, sonra kenarlara boşluk ekleyin (`  POSTMAN  `) | Her iki durumda da Postman kartı görünür | | |
| 3 | `xyzabc` yazın | Sayaç "0 sonuç gösteriliyor"; boş sonuç mesajı görünür | | |
| 4 | Temizle'ye basın; ardından yalnızca boşluk yazın | Her iki durumda da beş kart görünür | | |
| 5 | Her sayfadaki menü bağlantılarını tıklayın | Ana Sayfa, İçerikler ve Hakkında doğru sayfalara gider | | |
| 6 | Tarayıcıyı 390 px genişliğe getirin; Tab ile gezinin | Yatay kaydırma çubuğu oluşmaz; arama kutusu ve Temizle düğmesi klavyeyle seçilir | | |

## Ekran görüntüleri

- [ ] Normal arama (ör. `git` yazılmış, tek kart görünür)
- [ ] Boş sonuç (ör. `xyzabc` yazılmış, mesaj görünür)
- [ ] Mobil görünüm (390 px genişlik)
