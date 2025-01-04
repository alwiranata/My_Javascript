function getAksi(s1, s2) {
    if (s1 && s2) {
        return "Mundur (A1)";
    } else if (s1 && !s2) {
        return "Berhenti (A2)";
    } else if (!s1 && s2) {
        return "Maju (A3)";
    } else {
        return "Tetap Diam (A4)";
    }
}

// Contoh penggunaan:
const sensorJarak = false;  // Sensor Jarak: Objek kurang dari 1 meter
const sensorSuhu = false; // Sensor Suhu: Suhu ≤ 35°C

const keputusanRobot = getAksi(sensorJarak, sensorSuhu);
console.log(`Keputusan Robot: ${keputusanRobot}`);
