import * as AOS from 'aos';

// Initialize AOS animation library
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  mirror: false
});

document.addEventListener('DOMContentLoaded', () => {
  // Navbar toggle for mobile
  const navbarToggle = document.getElementById('navbar-toggle');
  const navbarMenu = document.getElementById('navbar-menu');
  
  if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener('click', () => {
      navbarMenu.classList.toggle('active');
      navbarToggle.classList.toggle('active');
    });
  }
  
  // Close menu when clicking on a nav link (mobile)
  const navLinks = document.querySelectorAll('.navbar__menu li a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbarMenu.classList.remove('active');
      navbarToggle.classList.remove('active');
    });
  });
  
  // Change navbar background on scroll
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});

// Add active class to navbar toggle button
document.addEventListener('click', function(e) {
  const navbarToggle = document.getElementById('navbar-toggle');
  
  if (e.target.closest('#navbar-toggle')) {
    navbarToggle.classList.toggle('active');
  }
});

// Custom styles for navbar toggle when active
const navbarToggle = document.getElementById('navbar-toggle');

if (navbarToggle) {
  navbarToggle.addEventListener('click', function() {
    if (this.classList.contains('active')) {
      this.children[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
      this.children[1].style.opacity = '0';
      this.children[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
    } else {
      this.children[0].style.transform = 'none';
      this.children[1].style.opacity = '1';
      this.children[2].style.transform = 'none';
    }
  });
}