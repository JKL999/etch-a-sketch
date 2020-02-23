const sketch = () => {
    const container = document.getElementById('container');
    const randomColor = Math.floor(Math.random()*16777215).toString(16);

    const createGrid = (rows, cols) => {
        container.style.setProperty('--grid-rows', rows);
        container.style.setProperty('--grid-cols', cols);
        for(c = 0; c < (rows * cols); c++) {
            let cell = document.createElement('div');
            // cell.innerText = (c+1);
            container.appendChild(cell).className = 'grid-item';
        };
        const cells = document.querySelectorAll('.grid-item');
        cells.forEach(cell => {
            // console.log(cell.innerText);
            cell.addEventListener('mouseover', function() {
                this.classList.add('blackOut');
                // this.classList.add('colorize');
                // this.style.setProperty('--random-color', randomColor);
                // console.log(randomColor);
            });
        });
        

    };
    
    const clearBtn = document.querySelector('.top-section button');
        clearBtn.addEventListener('click', () => {
            clearGrid();
            let size = prompt('Enter a new grid size', 16);
            createGrid(size, size);
        });
    

    const clearGrid = () => {
        const cells = document.querySelectorAll('.grid-item');
        cells.forEach(cell => {
            cell.classList.remove('blackOut');
            cell.remove();
        });
    
    };
    // const colorize = () => {
    //     this.style.backgroundColor = randomColor;
    // }
    
    
    
    
    createGrid(16,16);
};




sketch();