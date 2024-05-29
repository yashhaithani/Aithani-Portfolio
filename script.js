document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.querySelector(".preloader").style.display = "none";
    }, 2000);
  });
  
function toggleMenu() {
    const menuLinks = document.querySelector('.menu-links');
    const burgerIcon = document.querySelector('.burger-icon');
    menuLinks.classList.toggle('open');
    burgerIcon.classList.toggle('open');
  }