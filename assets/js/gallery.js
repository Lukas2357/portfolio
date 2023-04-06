document.addEventListener('DOMContentLoaded', function() {
  console.log('Gallery script loaded');

  var images = document.querySelectorAll('.image-gallery img');
  var currentIndex = 0;

  function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    images.forEach(function(img, index) {
      img.style.display = index === currentIndex ? 'block' : 'none';
    });
  }

  document.getElementById('prev-image').addEventListener('click', function() {
    console.log('Previous button clicked');
    changeImage(-1);
  });

  document.getElementById('next-image').addEventListener('click', function() {
    console.log('Next button clicked');
    changeImage(1);
  });

  changeImage(0);
});
