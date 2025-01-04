function evaluasiNarasi(n1, n2) {
    if (n1 && n2) {
        return "Narasi Baik";
    } else if (n1 && !n2) {
        return "Narasi Kurang Relevan";
    } else if (!n1 && n2) {
        return "Narasi Kurang Logis";
    } else {
        return "Narasi Tidak Terstruktur";
    }
}

// Contoh penggunaan:
const mengikutiKronologi = false;  // N1: Kalimat mengikuti urutan waktu
const mendukungPlot = false;        // N2: Kalimat mendukung cerita utama

const hasilNarasi = evaluasiNarasi(mengikutiKronologi, mendukungPlot);
console.log(`Hasil Evaluasi Narasi: ${hasilNarasi}`);
