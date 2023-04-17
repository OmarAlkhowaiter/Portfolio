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

const navMenu = document.getElementById('nav-menu'),
  toggleMenu = document.getElementById('toggle-menu'),
  closeMenu = document.getElementById('close-menu')

toggleMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show')
})
closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('show')
})
