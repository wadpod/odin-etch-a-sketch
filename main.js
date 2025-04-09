const container = document.querySelector('.container');
const resizeButton = document.getElementById('resize');
const colorButtons = document.querySelectorAll('.color-btn');
let gridSize = 16;
let selectedColor = 'red'; // Default color

// Set up color selection
colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        selectedColor = button.dataset.color;
        // Update active state
        colorButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Update all colored squares
        const squares = document.querySelectorAll('.square');
        squares.forEach(square => {
            if (square.style.backgroundColor) {
                square.style.backgroundColor = selectedColor;
            }
        });
    });
});

// Set initial active color
colorButtons[0].classList.add('active');

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
                    // First interaction - set selected color
                    square.style.backgroundColor = selectedColor;
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
