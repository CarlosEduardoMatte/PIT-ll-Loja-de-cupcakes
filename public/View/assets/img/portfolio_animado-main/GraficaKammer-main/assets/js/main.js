
/*=============== SEARCH ===============*/
const searchButton = document.getElementById('search-button'),
    searchClose = document.getElementById('search-close'),
    searchContent = document.getElementById('search-content')
    
 /*=============== MENU SHOW ===============*/
if(searchButton){
    searchButton.addEventListener('click', () =>{
        searchContent.classList.add('show-search')
    })
}

/*=============== MENU HIDDEN ===============*/
if(searchClose){
    searchClose.addEventListener('click', ()=>{
        searchContent.classList.remove('show-search')
    })
}
/*=============== LOGIN ===============*/


/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== HOME SWIPER ===============*/


/*=============== FEATURED SWIPER ===============*/
let swiperFeatured = new Swiper('.featured__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidePerView: 'auto',
    centeredSlide: 'auto',
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        1150:{
            slidesPerView: 4,
            centeredSlide: false,
        }
    }
  })

/*=============== NEW SWIPER ===============*/


/*=============== TESTIMONIAL SWIPER ===============*/
let swiperTestimonial = new Swiper('.testimonial__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidePerView: 'auto',
    centeredSlide: 'auto',

    breakpoints:{
        1150:{
            slidesPerView: 3,
            centeredSlide: false,
        }
    }
  })


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
            : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        navLink = document.querySelector(`nav a[href*=${sectionId}]`)

        if(scrollDown >= sectionTop && scrollDown < sectionTop + sectionHeight){
            navLink.classList.add('active-link')
        } else {
            navLink.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/



ScrollReveal().reveal('.bottom-animado', {
    duration: 2000,  // Duração da animação em milissegundos
    origin: 'bottom',  // Origem da animação (pode ser 'top', 'bottom', 'left' ou 'right')
    distance: '50px',  // Distância de deslocamento do elemento durante a animação
    easing: 'ease-in-out',  // Tipo de easing da animação (opcional)
    mobile: true  // Ativar animação em dispositivos móveis (opcional)
  });



  ScrollReveal().reveal('.left-animado', {
    duration: 1000,  // Duração da animação em milissegundos
    origin: 'left',  // Origem da animação (nesse caso, vindo da esquerda)
    distance: '50px',  // Distância de deslocamento do elemento durante a animação
    easing: 'ease-in-out',  // Tipo de easing da animação (opcional)
    mobile: true  // Ativar animação em dispositivos móveis (opcional)
  });


  ScrollReveal().reveal('.right-animado', {
    duration: 1000,  // Duração da animação em milissegundos
    origin: 'right',  // Origem da animação (nesse caso, vindo da direita)
    distance: '50px',  // Distância de deslocamento do elemento durante a animação
    easing: 'ease-in-out',  // Tipo de easing da animação (opcional)
    mobile: true  // Ativar animação em dispositivos móveis (opcional)
  });


  ScrollReveal().reveal('.top-animado', {
    duration: 1000,  // Duração da animação em milissegundos
    origin: 'top',  // Origem da animação (nesse caso, vindo do topo)
    distance: '50px',  // Distância de deslocamento do elemento durante a animação
    easing: 'ease-in-out',  // Tipo de easing da animação (opcional)
    mobile: true  // Ativar animação em dispositivos móveis (opcional)
  });


  ScrollReveal().reveal('.titulo-animado', {
    duration: 1000,  // Duração da animação em milissegundos
    delay: 300,       // Atraso antes da animação começar
    origin: 'left',   // Origem da animação
    distance: '50px', // Distância de deslocamento do elemento durante a animação
    easing: 'ease-in-out', // Tipo de easing da animação (opcional)
    mobile: true,     // Ativar animação em dispositivos móveis (opcional)
    afterReveal: function(el) {
      el.classList.add('revelado');
    }
  });