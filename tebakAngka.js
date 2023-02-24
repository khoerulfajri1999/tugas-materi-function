alert(`Selamat datang di game tebak angka
kamu diminta untuk menebak angka 1 - 3
dan kamu akan bermain dalam 5 ronde.
player yang berhasil mengumpulkan tebakan terbanyak akan menang
SELAMAT BERMAIN!!!`);
let HP1 = 0;
let HP2 = 0;
let p1;
let p2;
let random;
let ulangi;
let ronde = 1;
let berhenti = true;

while (berhenti) {
  p1 = parseInt(prompt("Player 1: masukan angka"));
  p2 = parseInt(prompt("Player 2: masukan angka"));

  random = acakAngka();
  ulangi = data(p1, p2);
  if (!ulangi) {
    berhenti = window.confirm("Ulangi?");
  } else {
    if (p1 !== random && p2 !== random) {
      alert("Tidak ada yang benar. hasil SERI");
    } else {
      if (p1 === random) {
        alert("Player 1 Win");
        HP1++;
      }
      if (p2 === random) {
        alert("Player 2 Win");
        HP2++;
      }
    }

    alert(`
    Nilai yang dicari: ${random}
    -----------------------------------
    - Player 1: ${HP1}
    - Player 2: ${HP2}`);

    ronde++;
    if (ronde <= 5) {
      berhenti = window.confirm("Ronde " + ronde + "?");
    } else {
      if (HP1 > HP2) {
        alert("Good Jobs Player 1");
        berhenti = false;
      } else if (HP1 < HP2) {
        alert("Good Jobs Player 2");
        berhenti = false;
      } else {
        alert(`Wow pertarungan yang sangat sengit`);
        ronde = 1;
        HP1 = 0;
        HP2 = 0;
        berhenti = window.confirm("mau main lagi?");
      }
    }
  }
}

function data(player1, player2) {
  if (player1 === player2) {
    alert("tebakan tidak boleh sama");
    return false;
  }

  if (player1 < 1 || player2 < 1) {
    alert("tebakan tidak boleh lebih kecil dari 1");
    return false;
  }

  if (player1 > 3 || player2 > 3) {
    alert("tebakan tidak boleh lebih besar dari 3");
    return false;
  }

  if (isNaN(player1) || isNaN(player2)) {
    alert("salah satu player belum menebak");
    return false;
  }

  return true;
}

function acakAngka() {
  const range = [1, 2, 3];
  let isNotRandom = true;
  while (isNotRandom) {
    let random = Math.floor(Math.random() * 10);
    let ketemu = range.find((r) => r === random);
    if (ketemu) {
      isNotRandom = false;
      return random;
    }
  }
}

console.log(acakAngka());

