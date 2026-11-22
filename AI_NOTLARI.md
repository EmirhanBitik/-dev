# AI kullanım kaydı
## Prompt 1: Plan ve
 kabul ölçütleri

- **Amaç:** Konu, sayfalar ve arama için kabul ölçütlerini önceden belirlemek.
- **Prompt:** "Yazılım araçları hakkında üç sayfalık bir site tasarlıyorum. Hedef kitle programlamaya yeni başlayanlar. Beş araç kartı var. HTML, CSS ve JavaScript kullanacağım. Ortak menüyü ve başlığa göre aramayı nasıl kurabilirim? Önce dosyaları ve kabul ölçütlerini öner; henüz kod yazma."
- **Önerinin değerlendirmesi:** Öneri üç HTML dosyası, bir CSS dosyası ve bir JS dosyası içeriyordu. Arama yalnızca başlıklara bakacak şekilde daraltıldı, çünkü ödev böyle istiyor. Kabul ölçütüne "Türkçe büyük/küçük harf" eklendi. *

## Prompt 2: Arama filtresi

- **Amaç:** Arama kutusunun yazdıkça filtrelemesini sağlayan kodu almak.
- **Prompt:** "Kart başlıklarına göre yazdıkça filtreleyen bir JavaScript arama kodu yazar mısın? Büyük/küçük harf duyarsız olsun, boş sorguda tüm kartlar görünsün, sayaç ve boş sonuç mesajı da güncellensin."

## Prompt 3: Türkçe karakter sorunu

- **Amaç:** Türkçe I/ı/İ ve aksanlarla ilgili eşleşme sorununu çözmek.
- **Prompt:** "Türkçe metinlerde `toLowerCase` kullanınca 'I' ve 'ı' karışıyor. Arama için iki metni de aynı biçime getiren bir fonksiyon önerir misin?"

## Kod açıklamaları (kendi sözlerinizle yazın)

### Event listener

Aşağıdaki satır `script.js` içindedir:

```js
aramaKutusu.addEventListener('input', filtrele);
```

Açıklama taslağı: Bu satır arama kutusunda bir değişiklik olduğunda (yazma, silme, yapıştırma) `filtrele` fonksiyonunu çağırır. Bu yüzden sonuçlar her tuşta güncellenir ve düğmeye basmak gerekmez.


### Filtreleme koşulu

```js
const goster = sorgu === '' || baslik.includes(sorgu);
```

Açıklama taslağı: Sorgu boşsa kart her zaman gösterilir. Sorgu doluysa, sadeleştirilmiş başlık sadeleştirilmiş sorguyu içeriyorsa kart gösterilir. `includes` başlığın içinde arama yapar, bu yüzden "vis" yazıldığında da "Visual Studio Code" eşleşir.

