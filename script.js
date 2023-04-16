const galleryItems = document.querySelectorAll('.gallery-item');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  galleryItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < windowHeight) {
      item.classList.add('reveal');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);