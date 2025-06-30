document.addEventListener('DOMContentLoaded', function () {
  let inputBuffer = '';
  const secretCode = 'iddqd';

  document.addEventListener('keydown', function (event) {
    inputBuffer += event.key.toLowerCase();

    if (inputBuffer.length > secretCode.length) {
      inputBuffer = inputBuffer.slice(-secretCode.length);
    }

    if (inputBuffer === secretCode) {
      const audio = document.getElementById('cheatSound');
      const modalEl = document.getElementById('cheatModal');

      if (audio && modalEl) {
        const modal = new bootstrap.Modal(modalEl);
        audio.currentTime = 0;
        audio.play();
        modal.show();
      }

      inputBuffer = '';
    }
  });
});
