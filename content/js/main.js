document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".slider img");
    let currentIndex = 0;
    
    setInterval(() => {
        
        images[currentIndex].style.transform = "translateX(-100%)";
        
        
        currentIndex = (currentIndex + 1) % images.length;
        
        
        images[currentIndex].style.transform = "translateX(0)";
    }, 7000);
});