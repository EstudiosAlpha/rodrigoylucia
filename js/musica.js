function playMusic() {
    const music = document.getElementById('background-music');
    music.play();
    closePopup();
  }

  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }