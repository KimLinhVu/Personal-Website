// Open and Close Modal
const open = document.querySelectorAll('[data-modal-target]');
const close = document.querySelectorAll('[data-close-button]');

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.show')
    modals.forEach(modal => {
        modal.classList.remove('show')
    })
})

open.forEach(container => {
    container.addEventListener('click', () => {
        const modal = document.querySelector(container.dataset.modalTarget)
        modal.classList.add('show')
        overlay.classList.add('show')
    })
})

close.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.closeButton)
        modal.classList.remove('show')
        overlay.classList.remove('show')
    })
})

// Change Img Background randomly

function changeBg(){
    
    const images = [
        'url("img/plant.jpg")',
        'url("img/plant7.jpg")',
        'url("img/plant12.jpg")',
    ]
    
    const i = 0
    const background = document.querySelector('.hero')
    const bg = images[Math.floor(Math.random() * images.length)]
    background.style.background = bg;
    background.style.backgroundSize = "cover"
    
}
setInterval(changeBg, 3500)

//Show reveal elements while scrolling

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    var slide = document.querySelectorAll('.slide')

    for (var i = 0; i < reveals.length; i++){

        var windowHeight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;

        if (revealtop < windowHeight){
            reveals[i].classList.add('active')
        }
        else{
            reveals[i].classList.remove('active')
        }
    }

    for (var i = 0; i < slide.length; i++){

        var windowHeight = window.innerHeight;
        var revealtop = slide[i].getBoundingClientRect().top;

        if (revealtop < windowHeight - 10){
            slide[i].classList.add('active')
        }
        else{
            slide[i].classList.remove('active')
        }
    }
}

/* Typewriter Effect */
const texts = ['projects']
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){

    if (count === texts.length){
        count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    document.querySelector('.proj-title').textContent = letter;
    if(letter.length === currentText.length){

        count++;
        index = 0;
    }
    
    setTimeout(type, 400);

}());

const texts1 = ['College Student', 'Developer', 'CS Major', 'Developer']
let count1 = 0;
let index1 = 0;
let currentText1 = '';
let letter1 = '';

(function type(){

    if (count1 === texts1.length){
        count1 = 0;
    }

    currentText1 = texts1[count1];
    letter1 = currentText1.slice(0, ++index1);
    document.querySelector('.typing').textContent = letter1;
    if(letter1.length === currentText1.length){

        count1++;
        index1 = 0;
    }
    
    setTimeout(type, 250);

}());