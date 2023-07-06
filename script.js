/*
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
*/ 
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry) => {
    console.log(entry);
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
if (hiddenElements.length > 0) {
  hiddenElements.forEach((el) => observer.observe(el));
} else {
  console.error('No elements found with class "hidden"');
}