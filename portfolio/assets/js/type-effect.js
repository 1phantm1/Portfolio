document.addEventListener("DOMContentLoaded", function() {
    const typewriter = document.querySelector("span#typewriter")
    let options = {
        strings: [
            "desenvolvedor Front-End", 
            "desenvolvedor Back-End", 
            "desenvolvedor Full-Stack", 
            "desenvolvedor Mobile", 
            "desenvolvedor de software"
        ],
        typeSpeed: 50,
        backSpeed: 100,
        loop: true
    }
    let typed = new Typed(typewriter, options)
})