function generateContainers(container,size){
    for(let i = 0; i < size; i++){
        let div = document.createElement('div');
        div.classList.add('head');
        for(let j = 0; j < size; j++){
            let element = document.createElement('div');
            element.classList.add('element');
            div.appendChild(element);
            let width = 600/size;
            let height = 600/size;
            element.style.width = `${width}px`;
            element.style.height = `${height}px`;
        }
        container.appendChild(div);
    }
}
function removeContainers(container, size){
    for(let i = 0; i < size; i++){
        let div = document.querySelector('.head');
        for(let j = 0; j < size; j++){
            let element = document.querySelector('.element');
            div.removeChild(element);
        }
        container.removeChild(div);
    }
}

function randomColorGenerator(){
    const randomColor = (Math.floor(Math.random()*16777215)).toString(16);
    return '#' + randomColor;
}

const container = document.querySelector('.container');

generateContainers(container,16);

let elements = document.querySelectorAll('.element');

elements.forEach((element) => {
    element.addEventListener('mouseover', () => {
        element.style.backgroundColor = randomColorGenerator();
    });
});

const reset = document.querySelector('.reset');

reset.addEventListener('click', () => {
    elements.forEach((element) => {
        element.style.backgroundColor = '#fff';
    });
});

const erase = document.querySelector('.erase');

erase.addEventListener('click', () => {
    elements.forEach((element) => {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = '#fff';
        });
    });
});

reset.addEventListener('click', () => {
    elements.forEach((element) => {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = randomColorGenerator();
        });
    });
});

const resize = document.querySelector('.resize');

let size = 16;

resize.addEventListener('click', () => {
    removeContainers(container, size);
    size = Number(prompt('Enter grid size(0 - 100) : '));
    generateContainers(container, size);
    elements = document.querySelectorAll('.element');
    elements.forEach((element) => {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = randomColorGenerator();
        });
    });
    reset.addEventListener('click', () => {
        elements.forEach((element) => {
            element.style.backgroundColor = '#fff';
        });
    });
    erase.addEventListener('click', () => {
        elements.forEach((element) => {
            element.addEventListener('mouseover', () => {
                element.style.backgroundColor = '#fff';
            });
        });
    });
});

