const rutInput = document.querySelector('main input');
const button = document.querySelector('button');
const outputContainer = document.querySelector('.c-h3');
const rutOutput = document.querySelector('.c-h3 h3');

button.addEventListener('click', () => {
    if(outputContainer.classList.contains('inactive')){
        outputContainer.classList.toggle('inactive');
        button.style.opacity = 0;
    }
})