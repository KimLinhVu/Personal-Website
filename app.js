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

// Change Img Background
let photo = 0
function changeBg(){
    
    const images = [
        'url("img/lavendar1.jpeg")',
        'url("img/plant12.jpg")',
        'url("img/blueflower.jpeg")',
        'url("img/plant.jpg")',
        'url("img/lily.jpeg")'
    ]

    if (photo === images.length){
        photo = 0
    }
    const background = document.querySelector('.hero')
    const bg = images[photo]
    photo += 1
    background.style.background = bg;
    background.style.backgroundSize = "cover"
    
}
setInterval(changeBg, 4000)

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

/* Typewriter Effect Header*/
const textDisplay = document.getElementById('typing')
const phrases = ['college student', 'CS major', 'developer', 'programmer', 'gamer']
let i = 0
let j = 0
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop(){
    isEnd = false
    textDisplay.innerHTML = currentPhrase.join('')

    if (i < phrases.length){

        if (!isDeleting && j <= phrases[i].length){
            currentPhrase.push(phrases[i][j])
            j++
            textDisplay.innerHTML = currentPhrase.join('')
        }

        if (isDeleting){
            currentPhrase.pop(phrases[i][j])
            j--
            textDisplay.innerHTML = currentPhrase.join('')
        }

        if (j == phrases[i].length){
            isDeleting = true
            isEnd = true
        }

        if (isDeleting && j === 0){
            i++
            currentPhrase = []
            isDeleting = false

            if (i == phrases.length){
                i = 0
            }
        }
    }
    const spedUp = Math.random() * (80 - 50) + 50
    const normalSpeed = Math.random() * (200 - 100) + 100
    const time = isEnd ? 1500 : isDeleting ? spedUp : normalSpeed
    setTimeout(loop, time)
}
loop()

/* Typewriter Effect project*/
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
    
    setTimeout(type, 300);

}());