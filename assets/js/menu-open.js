document.addEventListener("DOMContentLoaded", function () {
    const xmark = document.querySelector("i#close-icon");
    const menu = document.querySelector("i#menu-icon");
    const menu_list = document.querySelector("div#collapsed");
    const menu_overflow = document.querySelector("div#overflow");
    let openmenu = false;

    menu.addEventListener("click", function () {
        if (!openmenu) {
            menu_list.style.top = "0";
            menu.style.display = "none";
            xmark.style.display = "block";
            menu_overflow.style.display = "block";
            setTimeout(() => {
                menu_overflow.style.opacity = "1";
            }, 0);
            openmenu = true;
        }
    });

    xmark.addEventListener("click", function () {
        if (openmenu) {
            menu.style.display = "block";
            menu_list.style.top = "-100%";
            xmark.style.display = "none";
            menu_overflow.style.opacity = "0";
            setTimeout(() => {
                menu_overflow.style.display = "none";
            }, 300);
            openmenu = false;
        }
    })
})
