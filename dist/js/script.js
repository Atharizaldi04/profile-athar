const hamburge = document.querySelector('#hamburger');
const navMenu  = document.querySelector('#navbar-menu')

hamburge.addEventListener('click', function() {
    hamburge.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')

});

window.addEventListener('click', function (e) {

    if (e.target != hamburge && e.target != navMenu) {
        hamburge.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

window.onscroll = function () {
    const header = document.querySelector('header');
    const fixnav = header.offsetTop;

    if(window.pageYOffset > fixnav) {
        header.classList.add('navbar-fixed')
    } else {
        header.classList.remove('navbar-fixed')
    }
}


