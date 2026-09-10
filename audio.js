// Pengendali Audio Background
document.addEventListener('DOMContentLoaded', () => {
  const bgMusic = document.getElementById('bgMusic');

  if (bgMusic) {
    bgMusic.volume = 1.0;

    function playMusic() {
      bgMusic.play().then(() => {
        console.log("Muzik background berjaya dimainkan");
      }).catch(err => {
        console.log("Muzik tidak dapat dimainkan secara automatik:", err);
      });
    }

    // Mainkan muzik sebaik sahaja pengguna menyentuh/klik di mana-mana skrin
    document.body.addEventListener('click', playMusic, { once: true });
    document.body.addEventListener('touchstart', playMusic, { once: true });
  }
});
