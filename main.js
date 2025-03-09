    
    document.querySelector(".main-img").onload = function() {
        document.querySelectorAll(".small-images img").forEach(img => {
            img.style.opacity = "1";
            
        });
    };
    document.querySelectorAll(".small-images img").forEach(img => {
        img.addEventListener("click", function() {
            this.classList.add("zoom");
            setTimeout(() => {
                this.classList.remove("zoom");
                window.location.href = this.getAttribute("data-link");
            }, 300);
        });
    });