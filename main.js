const container = document.querySelector('.container');
const resizeButton = document.getElementById('resize');
let gridSize = 16;

function createGrid() {
    // Clear existing grid
    container.innerHTML = '';
    
    // Calculate square size based on container width
    const squareSize = 496 / gridSize;
    
    // Update container styles
    container.style.width = '500px';
    container.style.height = '500px';
    
    // Create new grid
    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        
        // Set square size
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        
        // Add hover effect
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = '#333';
        });
        
        container.appendChild(square);
    }
}

function resizeGrid() {
    let newSize = prompt('Enter number of squares per side (max 100):');
    newSize = parseInt(newSize);
    
    if (newSize && !isNaN(newSize)) {
        if (newSize > 0 && newSize <= 100) {
            gridSize = newSize;
            createGrid();
        } else {
            alert('Please enter a number between 1 and 100');
        }
    }
}

// Add event listener for resize button
resizeButton.addEventListener('click', resizeGrid);

// Initial grid creation
createGrid();
