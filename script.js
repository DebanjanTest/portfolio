let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        slides[i].style.opacity = 0; // Set opacity to 0 for all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    slides[slideIndex - 1].style.opacity = 1; // Fade in the current slide
    setTimeout(() => {
        slides[slideIndex - 1].style.opacity = 0; // Fade out after a delay
    }, 2500); // Wait for 2.5 seconds before fading out
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}
