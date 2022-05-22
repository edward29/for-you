window.addEventListener("scroll", reveal);
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowheight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
        
    }
}

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});

document.onkeydown = (e) => {
    if (event.keyCode == 123) {
        return false;
    }

    if (e.ctrlKey && e.shiftKey && e.keyCode === "I".charCodeAt(0)) {
        return false;  
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode === "C".charCodeAt(0)) {
        return false;  
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode === "J".charCodeAt(0)) {
        return false;  
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode === "U".charCodeAt(0)) {
        return false;  
    }
    if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
        return false;  
    }
}