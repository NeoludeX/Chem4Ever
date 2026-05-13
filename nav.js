// Highlights the nav link that matches the current page
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('nav a');
  const current = window.location.pathname.split('/').pop();
  links.forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    if (href === current || (current === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});
