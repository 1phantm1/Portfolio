const sr = ScrollReveal({ reset: false });

sr.reveal("div#contact", {
    duration: 1000,
    origin: "left",
    distance: "500px"
});

sr.reveal("i#menu-icon", {
    duration: 1000,
    origin: "top",
    distance: "50px"
});

sr.reveal("span#hi", {
    duration: 1200,
    origin: "right",
    distance: "550px"
});

sr.reveal("h2, h3, .comment", {
    duration: 1200,
    origin: "left",
    distance: "550px"
});

sr.reveal("p.scroll-reveal", {
    duration: 1200,
    origin: "right",
    distance: "550px"
});

sr.reveal(".project h3", {
    duration: 1200,
    origin: "right",
    distance: "550px"
});

sr.sync("button", {
    duration: 1200,
    origin: "right",
    distance: "550px"
});

