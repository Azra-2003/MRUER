window.addEventListener('scroll', function() {
    var scrollBtn = document.getElementById('scrollBtn');
    if (window.scrollY > 0) {
      scrollBtn.style.opacity = 0;
    } else {
      scrollBtn.style.opacity = 1;
    }
  });
  
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById('hamburger');
    const navUL = document.getElementById('nav-ul');

    hamburger.addEventListener('click', () => {
        navUL.classList.toggle('show');
    });
});
