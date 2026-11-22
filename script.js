// Arama: yalnızca kart başlıklarına bakar, yazdıkça filtreler.
const aramaKutusu = document.getElementById('arama-kutusu');
const temizleDugmesi = document.getElementById('temizle');
const sayac = document.getElementById('sayac');
const bosSonuc = document.getElementById('bos-sonuc');
const kartlar = Array.from(document.querySelectorAll('#kart-listesi .card'));

// Büyük/küçük harf, Türkçe I/ı/İ farkı ve Türkçe aksanlar (ç, ş, ğ, ö, ü) eşleşmeyi bozmasın diye metni sadeleştirir.
// Kenar boşlukları kırpılır, aradaki çoklu boşluklar tek boşluğa indirilir.
function sadelestir(metin) {
  return metin
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/ı/g, 'i')
    .replace(/\s+/g, ' ')
    .trim();
}

function filtrele() {
  const sorgu = sadelestir(aramaKutusu.value);
  let gosterilen = 0;

  kartlar.forEach(function (kart) {
    const baslik = sadelestir(kart.querySelector('h2').textContent);
    // Sorgu boşsa tüm kartlar görünür; değilse yalnızca başlığında sorgu geçen kartlar görünür.
    const goster = sorgu === '' || baslik.includes(sorgu);
    kart.hidden = !goster;
    if (goster) {
      gosterilen += 1;
    }
  });

  sayac.textContent = gosterilen + ' sonuç gösteriliyor';
  bosSonuc.hidden = gosterilen > 0;
}

aramaKutusu.addEventListener('input', filtrele);

temizleDugmesi.addEventListener('click', function () {
  aramaKutusu.value = '';
  filtrele();
  aramaKutusu.focus();
});

filtrele();
