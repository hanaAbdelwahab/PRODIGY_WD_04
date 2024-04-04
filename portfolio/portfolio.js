window.addEventListener('scroll', function() {
    var header = document.querySelector('#header');
    var logo = document.querySelector('#logo');
    var headerLogo = document.querySelector('#headerlogo');
    var scrollPos = window.scrollY;

    if (scrollPos > 0) {
        header.classList.add('scrolled');
        logo.style.visibility = 'visible';
        headerLogo.style.opacity = '0';
    } else {
        header.classList.remove('scrolled');
        logo.style.visibility = 'hidden';
        headerLogo.style.opacity = '1';
    }
});
