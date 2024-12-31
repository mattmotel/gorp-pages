document.addEventListener('DOMContentLoaded', function() {
    const preview = document.querySelector('.preview-text');
    const weightButtons = document.querySelectorAll('.weight-buttons .news-button');
    const sizeDown = document.querySelector('.size-down');
    const sizeUp = document.querySelector('.size-up');
    
    let currentSize = 3;

    // Weight buttons
    weightButtons.forEach(button => {
        button.addEventListener('click', () => {
            weightButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Handle special cases
            let weight = button.textContent;
            if (weight === 'SEMI BOLD') {
                weight = 'Semi Bold';
            } else if (weight === 'EXTRA LIGHT') {
                weight = 'ExtraLight';
            } else {
                weight = weight.charAt(0) + weight.slice(1).toLowerCase();
            }
            
            preview.style.fontFamily = `'GORPAZ ${weight}', sans-serif`;
        });
    });

    // Size buttons
    sizeDown.addEventListener('click', () => {
        if (currentSize > 1) {
            currentSize -= 0.5;
            preview.style.fontSize = `${currentSize}rem`;
        }
    });

    sizeUp.addEventListener('click', () => {
        if (currentSize < 6) {
            currentSize += 0.5;
            preview.style.fontSize = `${currentSize}rem`;
        }
    });
}); 