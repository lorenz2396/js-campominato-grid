const button = document.querySelector('.button');

button.addEventListener('click',
    function(){
        const gridContainer = document.querySelector('.grid-container');
        for (let i = 1; i <= 100; i++) {
            const newCell = document.createElement('div');
            newCell.classList.add('cell');
            newCell.append(i);
            newCell.addEventListener('click', function () {
            // newCell.addEventListener('click', function (e) {
                this.classList.toggle('active');
                console.log(this.innerHTML);
                
                printSomething();

                // e.target.classList.toggle('active');
                // console.log(e.target.innerHTML);
            });

            gridContainer.append(newCell);
        }

        function printSomething() {
            console.log(Math.random());
        }
    }
)
