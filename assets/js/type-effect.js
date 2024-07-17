document.addEventListener("DOMContentLoaded", function () {
  const e = document.querySelector("span#typewriter");
  new Typed(e, {
    strings: [
      "desenvolvedor Front-End",
      "desenvolvedor Back-End",
      "desenvolvedor Full-Stack",
      "desenvolvedor Mobile",
      "desenvolvedor de software",
    ],
    typeSpeed: 50,
    backSpeed: 100,
    loop: !0,
  });
});
