document.querySelector('.image-block').addEventListener('wheel', function(e) {
    e.preventDefault(); // Останавливаем прокрутку страницы
    this.scrollTop += e.deltaY; // Прокручиваем блок с изображениями
  });
  