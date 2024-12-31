document.addEventListener('DOMContentLoaded', function() {
    const preview = document.querySelector('.preview-text');
    const weightButtons = document.querySelectorAll('.weight-buttons .news-button');
    const sizeDown = document.querySelector('.size-down');
    const sizeUp = document.querySelector('.size-up');
    
    let currentSize = 3; // Starting size in rem

    // Weight buttons
    weightButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            weightButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            // Set font weight based on button text
            const weight = button.textContent.toLowerCase();
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