document.addEventListener('DOMContentLoaded', function() {
    const messages = document.querySelectorAll('.chat-message');
    const chatContainer = document.querySelector('.chat-container');
    let delay = 4000;

    function scrollToLatest(message) {
        const rect = message.getBoundingClientRect();
        const isVisible = (
            rect.top >= 0 &&
            rect.bottom <= window.innerHeight
        );

        if (!isVisible) {
            window.scrollTo({
                top: window.scrollY + rect.top - window.innerHeight + rect.height + 300,
                behavior: 'smooth'
            });
        }
    }

    function typeWriter(element, text) {
        return new Promise(resolve => {
            let i = 0;
            element.textContent = '';
            
            function type() {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    if (text.charAt(i) === '!' || text === text.toUpperCase()) {
                        element.classList.add('emphasis');
                        setTimeout(() => element.classList.remove('emphasis'), 500);
                    }
                    const message = element.closest('.chat-message');
                    scrollToLatest(message);
                    i++;
                    setTimeout(type, Math.random() * 50 + 30);
                } else {
                    resolve();
                }
            }
            
            type();
        });
    }

    async function showMessages() {
        for (let message of messages) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            message.classList.add('visible');
            const content = message.querySelector('.message-content');
            const text = content.textContent;

            if (text.includes('SPACE!') || 
                text.includes('WHAT?!') || 
                text.includes('AHHH!!!')) {
                content.setAttribute('data-excitement', 'high');
            }

            scrollToLatest(message);
            await typeWriter(content, text);

            if (message.classList.contains('exploding')) {
                message.classList.add('boom');
                document.body.style.animation = 'screenFlash 1s ease-out, shake 0.5s ease-in-out';
                await new Promise(resolve => setTimeout(resolve, 1000));
                document.body.style.animation = '';
                
                // Force scroll after explosion
                window.scrollTo({
                    top: window.scrollY + 300,
                    behavior: 'smooth'
                });
            } else {
                // Normal scroll for other messages
                scrollToLatest(message);
            }

            await new Promise(resolve => setTimeout(resolve, 500));
        }
    }

    showMessages();
}); 