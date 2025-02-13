onload = () =>{
        document.body.classList.remove("container");
};
window.addEventListener('load', () => {
        const audio = document.getElementById("bg-music");
        audio.volume = 0.5; // Adjust volume if needed (0 to 1)
        audio.play().catch(error => console.log("Autoplay failed:", error));
    });