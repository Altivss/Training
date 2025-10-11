document.addEventListener('DOMContentLoaded', function() {
    // Modal for certifications
    const certifications = document.querySelectorAll('#certifications li');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.getElementsByClassName('close')[0];

    certifications.forEach(function(li) {
        li.addEventListener('click', function() {
            const imageSrc = this.getAttribute('data-image');
            modalImg.src = imageSrc;
            modal.style.display = 'block';
        });
    });

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    // Typing effect for intro
    const introText = "I am BS Information Technology with the experience on Web development like React js, html, CSS, and on the backend is MongoDB, Express and SQL. I am also having an experience in Java, python and C#. Also, have some knowledge in networking. I am strong in teamwork, critical thinking. Adaptable and eager to contribute to the team.";
    const introElement = document.getElementById('intro');
    let index = 0;
    function typeWriter() {
        if (index < introText.length) {
            introElement.innerHTML += introText.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        }
    }
    introElement.innerHTML = '';
    typeWriter();

    // Animate progress bars on scroll
    const progressBars = document.querySelectorAll('.progress');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.getAttribute('data-width');
            }
        });
    });
    progressBars.forEach(bar => {
        observer.observe(bar);
    });

    // Animate list items on scroll
    const listItems = document.querySelectorAll('li');
    const listObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    });
    listItems.forEach(item => {
        listObserver.observe(item);
    });

    // Dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            darkModeToggle.textContent = 'Light Mode';
        } else {
            darkModeToggle.textContent = 'Dark Mode';
        }
    });

    // Hover change image for profile image
    const profileImg = document.getElementById('profile-img');
    const originalSrc = profileImg.src;
    const hoverSrc = 'images/BS IT_ALTIVO_IMG_V_5261.jpg';
    profileImg.addEventListener('mouseenter', function() {
        this.src = hoverSrc;
    });
    profileImg.addEventListener('mouseleave', function() {
        this.src = originalSrc;
    });
    // For mobile touch
    profileImg.addEventListener('touchstart', function() {
        this.src = hoverSrc;
    });
    profileImg.addEventListener('touchend', function() {
        this.src = originalSrc;
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(contactForm);
        fetch('https://formspree.io/f/xwprragd', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                const thankYouModal = document.getElementById('thank-you-modal');
                thankYouModal.style.display = 'block';
                contactForm.reset();
            } else {
                alert('Failed to send message. Please try again.');
            }
        }).catch(error => {
            console.error('Error:', error);
            alert('Failed to send message. Please try again.');
        });
    });

    // Thank you modal close
    const closeThankYou = document.getElementById('close-thank-you');
    closeThankYou.addEventListener('click', function() {
        const thankYouModal = document.getElementById('thank-you-modal');
        thankYouModal.style.display = 'none';
    });

    // Close thank you modal when clicking outside
    window.addEventListener('click', function(event) {
        const thankYouModal = document.getElementById('thank-you-modal');
        if (event.target == thankYouModal) {
            thankYouModal.style.display = 'none';
        }
    });

    // Scroll progress bar
    const scrollProgress = document.getElementById('scroll-progress');
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    });

    // Back to top button
    const backToTopBtn = document.getElementById('back-to-top');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
