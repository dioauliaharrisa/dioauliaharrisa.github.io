let barisPertama = document.getElementById('barisPertama')
let barisKedua = document.getElementById('barisKedua')

let totalPoin = +(localStorage.getItem(`totalPoin`));

if (totalPoin >= 150 && totalPoin < 300) {
  barisPertama.innerHTML = `Poin yang kamu dapatkan sebanyak ${totalPoin} poin`
  barisKedua.innerHTML = `Selamat kamu mendapatkan uang sebanyak Rp. ${totalPoin * 50000}.-`
  
} else if (totalPoin >= 300) {
  barisPertama.innerHTML = `Poin yang kamu dapatkan sebanyak ${totalPoin} poin`
  barisKedua.innerHTML = `Selamat kamu mendapatkan uang sebanyak Rp.100,000,000.-`
  
} else {
  barisPertama.innerHTML = `Poin yang kamu dapatkan sebanyak ${totalPoin} poin`
  barisKedua.innerHTML = `Sayang sekali, total poin anda belum mencukupi untuk anda bisa get rich.-`
}