// ===Show Menu===
const navMenu = document.getElementById('nav-menu'),
navToggle  = document.getElementById('nav-toggle'),
 navClose = document.getElementById('nav-close');

// ===Menu Show===
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
// ===Close Menu===
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

// ========Remove Mobile Menu after clicking on an element of list
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach( n => n.addEventListener('click', linkAction))

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// ==================Swiper JS Discover===========
let swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
})

// ============Video============

const videoFile = document.getElementById('video-file');
const videoIcon = document.getElementById('video-icon');
const videoButton = document.getElementById('video-button');

function playPause(){
    if(videoFile.paused){
        //play video
        videoFile.play();
        // after that change the icon
        videoIcon.classList.add('ri-pause-fill')
        videoIcon.classList.remove('ri-play-fill')
    }
    else{
        //pause the video
        videoFile.pause()
        // change the icon
        videoIcon.classList.remove('ri-pause-fill')
        videoIcon.classList.add('ri-play-fill')
    }
}

videoButton.addEventListener('click',playPause)

function finalVideo(){
    //when video ends, set the icon to play
    videoIcon.classList.remove('ri-pause-fill')
    videoIcon.classList.add('ri-play-fill')
}

videoFile.addEventListener('ended', finalVideo)

// =SCROLL REVELA ANIMATION======
const sr = ScrollReveal({
    distance : '60px',
    duration : 2800,
    reset : true,
})

sr.reveal(`.home__data, .home__social, .video__container, .place__container`,{
    origin : 'top',
    interval : 100
})

sr.reveal(`.about__data, .experience__content, .subscribe__content`,{
    origin : 'left',
    interval : 100
})
sr.reveal(`.about__img, .experience__img`,{
    origin : 'right',
    interval : 100
})
sr.reveal(`.footer__content`,{
    origin : 'bottom',
    interval : 100
})