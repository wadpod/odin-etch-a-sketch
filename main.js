const container = document.querySelector('.container');
const resizeButton = document.getElementById('resize');
let gridSize = 16;

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

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
        
        // Initialize opacity
        square.dataset.opacity = '0';
        
        // Add hover effect
        square.addEventListener('mouseover', () => {
            const currentOpacity = parseFloat(square.dataset.opacity);
            if (currentOpacity < 1) {
                const newOpacity = Math.min(currentOpacity + 0.1, 1);
                square.dataset.opacity = newOpacity;
                
                if (currentOpacity === 0) {
                    // First interaction - set random color
                    square.style.backgroundColor = getRandomColor();
                }
                
                square.style.opacity = newOpacity;
            }
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
