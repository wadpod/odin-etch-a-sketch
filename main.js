const container = document.querySelector('.container');
const gridSize = 16;

function createGrid() {
    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        
        // Add hover effect
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = '#333';
        });
        
        container.appendChild(square);
    }
}

createGrid();
