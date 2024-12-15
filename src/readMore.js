document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('content');
    const readMoreBtn = document.getElementById('readMoreBtn');
    const maxLength = 465;
    
    const fullText = content.textContent;
    const truncatedText = fullText.slice(0, maxLength) + '...';
    
    let isExpanded = false;
    
    // Initial state
    content.textContent = truncatedText;
    
    readMoreBtn.addEventListener('click', function() {
        isExpanded = !isExpanded;
        
        if (isExpanded) {
            content.textContent = fullText;
            readMoreBtn.textContent = 'Read Less';
        } else {
            content.textContent = truncatedText;
            readMoreBtn.textContent = 'Read More';
        }
    });
});