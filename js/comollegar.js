
// "Cómo puedo llegar" — carrusel de 3 (o más) elementos sin romper si falta alguno.
// Requiere en HTML: #imageContainer con .imagen-destacada (img1..imgN) y contenidos #content1..#contentN

(function () {
  const container = document.getElementById('imageContainer');
  if (!container) return;

  const images = Array.from(container.querySelectorAll('.imagen-destacada'));
  if (images.length === 0) return;

  // Mapear content1..contentN según el número real de imágenes
  const contents = images.map((_, idx) => document.getElementById(`content${idx + 1}`));

  // Detecta índice inicial por la clase selected
  let currentIndex = images.findIndex(img => img.classList.contains('selected'));
  if (currentIndex < 0) currentIndex = 0;

  function render(index) {
    const total = images.length;
    currentIndex = ((index % total) + total) % total;

    images.forEach((img, i) => {
      img.classList.toggle('selected', i === currentIndex);
    });

    contents.forEach((content, i) => {
      if (!content) return;
      content.style.display = (i === currentIndex) ? 'block' : 'none';
    });
  }

  // Mantiene el nombre usado por tus flechas/botones en HTML
  window.changeContent = function (direction) {
    render(currentIndex + direction);
  };

  // Click en miniaturas
  images.forEach((img, i) => {
    img.addEventListener('click', () => render(i));
  });

  // Swipe con Hammer (si está cargado)
  if (window.Hammer) {
    const mc = new Hammer(container, {
      threshold: 5,
      pointers: 1
    });

    mc.on('swipeleft swiperight', function (event) {
      if (event.type === 'swiperight') {
        window.changeContent(-1);
      } else if (event.type === 'swipeleft') {
        window.changeContent(1);
      }
    });
  }

  // Render inicial
  render(currentIndex);
})();