// Aturan Inferensi
const aturan = [
    { gejala: ["demam", "batuk"], hasil: "Flu" },
    { gejala: ["demam", "sakit kepala"], hasil: "Demam Berdarah" },
    { gejala: ["batuk", "nyeri tenggorokan"], hasil: "Radang Tenggorokan" },
];

// Fungsi Diagnosa
const diagnosis = (gejala) => {
    for (let rule of aturan) {
        if (rule.gejala.every((g) => gejala.includes(g))) {
            return rule.hasil;
        }
    }
    return "Tidak dapat didiagnosis";
};

// Input dari pengguna
const prompt = require("prompt-sync")(); // Menggunakan prompt-sync untuk input pengguna

const gejalaInput = prompt("Masukkan gejala (pisahkan dengan koma): ");
const gejalaArray = gejalaInput.split(",").map((g) => g.trim().toLowerCase());

// Menampilkan hasil diagnosis
console.log(diagnosis(gejalaArray));
