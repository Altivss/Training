document.addEventListener('DOMContentLoaded', function () {
  const loader = document.getElementById('page-loader');
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const backToTopBtn = document.getElementById('back-to-top');
  const scrollProgress = document.getElementById('scroll-progress');
  const revealItems = document.querySelectorAll('.reveal');
  const contactForm = document.getElementById('contact-form');

  setTimeout(function () {
    loader.style.opacity = '0';
    setTimeout(function () {
      loader.style.display = 'none';
    }, 400);
  }, 450);

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  revealItems.forEach(function (item) {
    observer.observe(item);
  });

  darkModeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀' : '☾';
  });

  window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = percent + '%';

    backToTopBtn.classList.toggle('show', scrollTop > 320);
  });

  backToTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const button = this.querySelector('button');
    const originalText = button.textContent;
    const form = this;

    button.textContent = 'Sending...';

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    })
      .then(function (response) {
        if (!response.ok) {
          throw new Error('Submission failed');
        }
        form.reset();
        alert('Thanks for reaching out. I will get back to you soon.');
      })
      .catch(function () {
        alert('Sorry, the message could not be sent right now. Please email me directly at jaysonaltivo06@gmail.com.');
      })
      .finally(function () {
        button.textContent = originalText;
      });
  });
});
