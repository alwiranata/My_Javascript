// Aturan Inferensi untuk Harga
const aturanHarga = [
    { kondisi: ["P1", "P2"], hasil: "Harga Tinggi" },
    { kondisi: ["P1", "¬P2"], hasil: "Harga Sedang" },
    { kondisi: ["¬P1", "P2"], hasil: "Harga Rendah" },
];

// Fungsi Prediksi Harga
const prediksiHarga = (P1, P2) => {
    for (let rule of aturanHarga) {
        if (rule.kondisi.every((k) => {
            // Memeriksa apakah kondisi P1 atau P2 sesuai dengan aturan
            if (k === "P1") return P1;
            if (k === "P2") return P2;
            if (k === "¬P1") return !P1;
            if (k === "¬P2") return !P2;
            return false;
        })) {
            return rule.hasil;
        }
    }
    return "Tidak Dapat Diprediksi";
};

// Input dari pengguna
const prompt = require("prompt-sync")(); // Menggunakan prompt-sync untuk input pengguna

const P1Input = prompt("Masukkan nilai P1 (true/false): ");
const P2Input = prompt("Masukkan nilai P2 (true/false): ");

// Mengonversi input ke tipe boolean
const P1 = P1Input.toLowerCase() === "true";
const P2 = P2Input.toLowerCase() === "true";

// Menampilkan hasil prediksi harga
console.log(prediksiHarga(P1, P2));
