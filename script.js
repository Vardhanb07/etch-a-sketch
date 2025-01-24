function generateContainers(container){
    for(let i = 0; i < 16; i++){
        let div = document.createElement('div');
        div.classList.add('head');
        for(let j = 0; j < 16; j++){
            div.appendChild((document.createElement('div')));
        }
        container.appendChild(div);
    }
}

const container = document.querySelector('.container');

generateContainers(container);