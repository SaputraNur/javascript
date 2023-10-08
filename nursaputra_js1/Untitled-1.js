// Fungsi untuk menentukan apakah angka genap atau ganjil
function cekGenapGanjil(angka) {
  if (angka % 2 === 0) {
    return "Genap";
  } else {
    return "Ganjil";
  }
}

// Fungsi untuk mengkonversi hari dalam bahasa Inggris ke bahasa Indonesia
function konversiHari(hari) {
  switch (hari) {
    case "Monday":
      return "Senin";
    case "Tuesday":
      return "Selasa";
    case "Wednesday":
      return "Rabu";
    case "Thursday":
      return "Kamis";
    case "Friday":
      return "Jumat";
    case "Saturday":
      return "Sabtu";
    case "Sunday":
      return "Minggu";
    default:
      return "Hari tidak valid";
  }
}

// Menggunakan perulangan for
console.log("Perulangan menggunakan for:");
for (let i = 1; i <= 5; i++) {
  console.log("Iterasi ke-" + i);
}

// Menggunakan perulangan while
console.log("\nPerulangan menggunakan while:");
let j = 1;
while (j <= 5) {
  console.log("Iterasi ke-" + j);
  j++;
}

// Menggunakan perulangan do while
console.log("\nPerulangan menggunakan do while:");
let k = 1;
do {
  console.log("Iterasi ke-" + k);
  k++;
} while (k <= 5);

// Contoh penggunaan if, else, dan nested if
console.log("\nContoh penggunaan if, else, dan nested if:");
let nilai = 75;
if (nilai >= 90) {
  console.log("Nilai Anda A");
} else if (nilai >= 80) {
  console.log("Nilai Anda B");
} else if (nilai >= 70) {
  console.log("Nilai Anda C");
} else {
  console.log("Nilai Anda D");
}

console.log("\nHasil cek genap atau ganjil: " + cekGenapGanjil(7));
console.log("Konversi hari: " + konversiHari("Wednesday"));
