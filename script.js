const firstContainer = document.querySelector('.firstContainer');
const scondContainer = document.querySelector('.secondContainer');
const thirdContainer = document.querySelector('.thirdContainer');
const fourthContainer = document.querySelector('.fourthContainer');

function boxCreate(container) {
    for(let i = 0; i < 4; i++){
        container.appendChild((document.createElement('div')));
        
    }
}

boxCreate(firstContainer);
boxCreate(scondContainer);
boxCreate(thirdContainer);
boxCreate(fourthContainer);