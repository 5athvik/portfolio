document.addEventListener("DOMContentLoaded", () => {
  // Smooth Scroll
  document.querySelectorAll('.nav-bar a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const targetSection = document.querySelector(this.getAttribute('href'));
          if (targetSection) {
              targetSection.scrollIntoView({ behavior: 'smooth' });
          }
          if (window.innerWidth <= 768) {
              document.querySelector('.nav-links').classList.remove('active');
          }
      });
  });

  // Hamburger Menu
  document.querySelector('.hamburger').addEventListener('click', () => {
      document.querySelector('.nav-links').classList.toggle('active');
  });

  // Theme Toggle
  const themeToggle = document.querySelector('.theme-toggle');
  themeToggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('light-theme');
      const icon = themeToggle.querySelector('i');
      icon.classList.toggle('fa-moon');
      icon.classList.toggle('fa-sun');
  });

  // Form Validation
  document.querySelector('.contact-form').addEventListener('submit', (e) => {
      const email = document.querySelector('input[name="email"]').value;
      if (!/\S+@\S+\.\S+/.test(email)) {
          e.preventDefault();
          alert('Please enter a valid email!');
      }
  });

  // Back-to-Top and Navbar Hide
  const backToTop = document.querySelector('.back-to-top');
  const navBar = document.querySelector('.nav-bar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 300) {
          backToTop.style.display = 'block';
          if (currentScroll > lastScroll) {
              navBar.classList.add('hidden');
          } else {
              navBar.classList.remove('hidden');
          }
      } else {
          backToTop.style.display = 'none';
          navBar.classList.remove('hidden');
      }
      lastScroll = currentScroll;
  });

  backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Progress Bar
  const progressBar = document.querySelector('.progress-bar');
  window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      progressBar.style.width = `${scrollPercent}%`;
  });

  // Custom Cursor
  const cursor = document.querySelector('.custom-cursor');
  document.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX - 10}px`;
      cursor.style.top = `${e.clientY - 10}px`;
  });

  document.querySelectorAll('a, button, .project-story, .skill-card, .cert-item, .moment').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });

  // Scroll Animations
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
          }
      });
  }, { threshold: 0.1 });

  document.querySelectorAll('.my-work, .my-skills, .my-story, .my-certs, .chat-with-me').forEach(section => {
      observer.observe(section);
  });
});