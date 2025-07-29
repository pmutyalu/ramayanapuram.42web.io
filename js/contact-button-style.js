// Contact form button styling script
document.addEventListener('DOMContentLoaded', function() {
    
    function styleContactButtons() {
        // Multiple selectors to catch different button types
        const selectors = [
            '.elfsight-app-d1259484-a5e0-448e-a6da-0b2e8f67d17e button',
            '.elfsight-app-d1259484-a5e0-448e-a6da-0b2e8f67d17e input[type="submit"]',
            '.elfsight-app-d1259484-a5e0-448e-a6da-0b2e8f67d17e .btn',
            '.elfsight-app-d1259484-a5e0-448e-a6da-0b2e8f67d17e .submit-btn',
            '.elfsight-app-d1259484-a5e0-448e-a6da-0b2e8f67d17e .button',
            'div[class*="elfsight"] button',
            'div[id*="elfsight"] button',
            '[class*="contact"] button'
        ];
        
        selectors.forEach(selector => {
            const buttons = document.querySelectorAll(selector);
            buttons.forEach(button => {
                // Apply the beautiful button styling
                button.style.cssText += `
                    background: #ff135a !important;
                    color: #ffffff !important;
                    border: none !important;
                    border-radius: 50px !important;
                    padding: 10px 25px !important;
                    font-weight: 600 !important;
                    font-size: 16px !important;
                    transition: all 0.3s ease !important;
                    cursor: pointer !important;
                    box-shadow: 0 2px 10px rgba(255, 19, 90, 0.3) !important;
                    position: relative !important;
                    overflow: hidden !important;
                `;
                
                // Add hover effects
                button.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-2px)';
                    this.style.boxShadow = '0 4px 20px rgba(255, 19, 90, 0.5)';
                });
                
                button.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0px)';
                    this.style.boxShadow = '0 2px 10px rgba(255, 19, 90, 0.3)';
                });
                
                // Add click animation
                button.addEventListener('click', function() {
                    this.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        this.style.transform = 'translateY(-2px)';
                    }, 150);
                });
            });
        });
    }
    
    // Initial styling
    styleContactButtons();
    
    // Re-apply styling when content loads (for dynamic widgets)
    setTimeout(styleContactButtons, 1000);
    setTimeout(styleContactButtons, 3000);
    setTimeout(styleContactButtons, 5000);
    
    // Observer for dynamically added content
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length > 0) {
                setTimeout(styleContactButtons, 500);
            }
        });
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});
