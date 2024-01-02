const container = document.querySelector(".container");
for(let i = 0; i < 16; i++){

    const smallContainer = document.createElement('div');
    smallContainer.classList.add('smallContainer')

    for(let j = 0; j < 16; j++){
    let newDiv = document.createElement('div');
    newDiv.classList.add('square');
    smallContainer.appendChild(newDiv);
    }

    container.appendChild(smallContainer);
}

const hover = function(){
    container.style.backgroundColor = 'aqua';
}

const antiHover = function(){
    container.style.backgroundColor = 'white';
}

container.addEventListener('mouseover', hover);
container.addEventListener('mouseout', antiHover);

const button = document.createElement('button');
button.classList.add('btn');

document.body.appendChild(button);

const press = function(){
    const ask = prompt('Enter the number of squares per side for the new grid.');

    if(ask !== null){
        const numberOfSquares = parseInt(ask, 10);

        if(numberOfSquares > 100){
            alert('Enter a number below 100');
        }
        else if (numberOfSquares > 0 && numberOfSquares < 100) {
            create(numberOfSquares);
        }
        else{
            alert('Please enter a positive number');
        }
    }
}

button.addEventListener('click', press);
button.textContent = "Press me";

function create(numberOfSquares) {
    container.innerHTML = '';

    const squareContainerWidth = container.clientWidth;
    const squareWidth = 672 / numberOfSquares;

    for (let i = 0; i < numberOfSquares; i++) {
        const smallContainer = document.createElement('div');
        smallContainer.classList.add('smallContainer');

        for (let j = 0; j < numberOfSquares; j++) {
            let newDiv = document.createElement('div');
            newDiv.style.width = `${squareWidth}px`;
            newDiv.style.height = `${squareWidth}px`;
            newDiv.style.border = `1px solid black`;
            newDiv.style.boxSizing = `border-box`;
            smallContainer.appendChild(newDiv);

            newDiv.addEventListener('mouseover', function () {
                newDiv.style.backgroundColor = 'aqua';
            });

            newDiv.addEventListener('mouseout', function () {
                newDiv.style.backgroundColor = '';
            });
        }

        container.appendChild(smallContainer);
    }
}

