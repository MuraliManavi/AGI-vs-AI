// Download button animation
document.getElementById('downloadBtn').addEventListener('click', function () {
    alert('In a real implementation, this would generate a PDF similar to your Python code example. For now, it just shows this message.');

    this.classList.add('animate-pulse');
    setTimeout(() => {
        this.classList.remove('animate-pulse');
    }, 1000);
});

// Intersection observer for animations
document.addEventListener('DOMContentLoaded', function () {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.comparison-card, #downloadBtn').forEach(card => {
        card.classList.add('opacity-0', 'transition-opacity', 'duration-500');
        observer.observe(card);

        setTimeout(() => {
            card.classList.remove('opacity-0');
        }, 100);
    });
});
