// Slider hover functionality - pauses animation, allows video controls
document.addEventListener('DOMContentLoaded', function() {
    
    // Get slider elements
    const slider = document.querySelector('.slider');
    const slideTrack = document.querySelector('.slide-track');
    
    // Only pause the slider animation on hover, not the videos
    if (slider && slideTrack) {
        slider.addEventListener('mouseenter', function() {
            // Pause only the sliding animation
            slideTrack.style.animationPlayState = 'paused';
        });
        
        slider.addEventListener('mouseleave', function() {
            // Resume the sliding animation
            slideTrack.style.animationPlayState = 'running';
        });
    }
    
    // Ensure videos can be controlled normally
    const sliderVideos = document.querySelectorAll('.slider video');
    sliderVideos.forEach(video => {
        // Allow normal video control behavior
        video.addEventListener('click', function(e) {
            // Don't interfere with video controls
            e.stopPropagation();
        });
        
        // Ensure video controls work properly
        video.addEventListener('play', function() {
            console.log('Video started playing');
        });
        
        video.addEventListener('pause', function() {
            console.log('Video paused');
        });
    });
});
