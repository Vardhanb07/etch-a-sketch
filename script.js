function generateContainers(container){
    for(let i = 0; i < 16; i++){
        let div = document.createElement('div');
        div.classList.add('head');
        for(let j = 0; j < 16; j++){
            let element = document.createElement('div');
            element.classList.add('element');
            div.appendChild(element);
        }
        container.appendChild(div);
    }
}

function randomColorGenerator(){
    const randomColor = (Math.floor(Math.random()*16777215)).toString(16);
    return '#' + randomColor;
}

const container = document.querySelector('.container');

generateContainers(container);

const elements = document.querySelectorAll('.element');

elements.forEach((element) => {
    element.addEventListener('mouseover', () => {
        element.style.backgroundColor = randomColorGenerator();
    })
});