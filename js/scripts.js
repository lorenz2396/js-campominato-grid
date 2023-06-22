const button = document.querySelector('button');

button.addEventListener('click',
    function(){
        const difficultSelector = document.querySelector('header > select');
        console.log(difficultSelector.value)
        
        const cellNumber = parseInt(difficultSelector.value)
        console.log(cellNumber)
        
        // let cellNumber;
        // if(difficultSelector == 'easy'){
        //    cellNumber = 100; 
        // }
        // else if(difficultSelector == 'medium'){
        //     cellNumber = 81;
        // }
        // else if(difficultSelector == 'difficult'){
        //     cellNumber = 49;
        // }
        createBoard(cellNumber);

    }
);

function createBoard(cellNumber){
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = '';

    for (let i = 1; i <= cellNumber; i++) {
        const newCell = createElement(i);
        newCell.classList.add('cells-' + cellNumber)
        gridContainer.append(newCell);
    }
};


function createElement(content){
    const newCell = document.createElement('div');
    newCell.innerHTML = `${content}`
    newCell.classList.add('cell');
    newCell.addEventListener('click', function () {
    // newCell.addEventListener('click', function (e) {
        console.log(this.innerHTML);
        this.classList.toggle('active');
    });

    return newCell;
}