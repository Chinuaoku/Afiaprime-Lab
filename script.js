// Mobile Menu Toggle
document.getElementById('menu-toggle').addEventListener('click', function () {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('active'); // Toggle the 'active' class
});

// Scroll to Top Button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const btn = document.getElementById('myBtn');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
}

document.getElementById('myBtn').addEventListener('click', function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});
