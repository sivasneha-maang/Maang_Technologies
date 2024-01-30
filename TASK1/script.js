const imageUrls=['d1.jpg','d2.jpg','d3.jpg','d4.jpg','d5.jpg','d6.jpg','d7.jpg','d8.jpg','d9.jpg','d10.jpg','d11.png','d12.png','d13.png'];

function getRandomImageUrl() {
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  return imageUrls[randomIndex];
}

function loadRandomImages(count) {
  const imageContainer = document.getElementById('image-container');

  for (let i = 0; i < count; i++) {
    const img = new Image();
    img.src = getRandomImageUrl();
    img.style.maxWidth = '300px'; 
    img.style.maxHeight = '200px'; 
    imageContainer.appendChild(img);
  }
}

function loadMoreImages() {

  loadRandomImages(3);
}

window.onload = function () {
 
  loadRandomImages(3);

 
  const loadMoreButton = document.getElementById('load-more');
  loadMoreButton.addEventListener('click', loadMoreImages);
};

