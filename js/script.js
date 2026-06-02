document.querySelectorAll('.navbar-items a[href^="#"], .banner-buttons a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const nav = document.querySelector('nav');

        if (targetElement) {
            const navHeight = nav.offsetHeight;
            window.scrollTo({
                top: targetElement.offsetTop - navHeight,
                behavior: 'smooth'
            });
        }
    });
});
