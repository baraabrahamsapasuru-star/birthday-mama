// Fungsi khusus untuk mengupdate subtitle dengan efek fade
function updateSubtitle(text) {
  subtitle.style.opacity = 0; // Sembunyikan dulu
  
  setTimeout(() => {
    subtitle.innerText = text; // Ganti teks
    subtitle.style.opacity = 1; // Munculkan kembali
  }, 400); // Delay singkat agar perpindahan teks halus
}

function showNext() {
  if (index > totalPhotos) {
    subtitle.style.opacity = 0; // Hilangkan subtitle saat foto habis
    setTimeout(dispersal, 2000);
    return;
  }

  // --- BAGIAN INI YANG PENTING ---
  // Ambil teks dari array berdasarkan urutan index
  const currentText = texts[(index - 1) % texts.length];
  updateSubtitle(currentText); 

  // Munculkan foto (fungsi createPolaroid yang sudah diperbaiki posisinya)
  createPolaroid(index.toString().padStart(2, '0') + ".jpeg");
  
  index++;
  
  // Lanjut ke foto berikutnya setelah 3 detik
  setTimeout(showNext, 3000); 
}