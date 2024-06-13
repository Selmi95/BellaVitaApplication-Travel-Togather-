
    document.addEventListener('DOMContentLoaded', function() {
        var backToTop = document.getElementById('back-to-top');
        var aboutSection = document.getElementById('about');
        
        backToTop.style.display = 'none'; // Hide icon initially

        window.addEventListener('scroll', function() {
            var aboutSectionBottom = aboutSection.getBoundingClientRect().bottom;
            var windowHeight = window.innerHeight;

            if (aboutSectionBottom <= windowHeight) {
                backToTop.style.display = 'flex';
            } else {
                backToTop.style.display = 'none';
            }
        });

        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });


    

