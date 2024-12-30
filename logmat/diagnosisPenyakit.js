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

// Contoh Penggunaan
console.log(diagnosis(["demam", "batuk"])); // Output: Flu
console.log(diagnosis(["demam", "sakit kepala"])); // Output: Demam Berdarah
console.log(diagnosis(["batuk", "nyeri tenggorokan"])); // Output: Radang Tenggorokan
console.log(diagnosis(["sakit perut"])); // Output: Tidak dapat didiagnosis
