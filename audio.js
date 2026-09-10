// Pengendali Audio Background
function setupAudio() {
  const bgMusic = document.getElementById('bgMusic');

  if (bgMusic) {
    bgMusic.volume = 1.0;

    function playMusic() {
      bgMusic.play().then(() => {
        console.log("Muzik background berjaya dimainkan");
      }).catch(err => {
        console.log("Muzik tidak dapat dimainkan:", err);
      });
    }

    // Guna window supaya tidak bergantung pada body sahaja
    window.addEventListener('click', playMusic, { once: true });
    window.addEventListener('touchstart', playMusic, { once: true });
  }
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupAudio);
} else {
  setupAudio();
