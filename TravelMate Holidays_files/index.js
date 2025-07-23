document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    

    const handleScroll = () => {
        if (window.innerWidth > 990) {
            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        }
    };

 
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    
   
    window.addEventListener("resize", handleScroll);
});
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".book-now-btn");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const toTopButton = document.querySelector('.to-top');
    const heroSection = document.querySelector('.hero-section'); // Assumes hero section has this class

    function toggleToTopButton() {
        if (heroSection) {
            const heroHeight = heroSection.offsetHeight;
            if (window.scrollY > 400) {
                toTopButton.classList.add('show');
            } else {
                toTopButton.classList.remove('show');
            }
        }
    }


    window.addEventListener('scroll', toggleToTopButton);


    toTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});