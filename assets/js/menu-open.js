document.addEventListener("DOMContentLoaded", function () {
  const CLOSE_ICON = document.querySelector("i#close-icon"),
    OPEN_ICON = document.querySelector("i#menu-icon"),
    COLLAPSED = document.querySelector("div#collapsed"),
    OVERFLOW = document.querySelector("div#overflow"),
    LIST = document.querySelectorAll("div#collapsed ul li a");
  let STATE = !1;
  OPEN_ICON.addEventListener("click", function () {
    STATE ||
      ((COLLAPSED.style.top = "0"),
      (OPEN_ICON.style.display = "none"),
      (CLOSE_ICON.style.display = "block"),
      (OVERFLOW.style.display = "block"),
      setTimeout(() => {
        OVERFLOW.style.opacity = "1";
      }, 0),
      (STATE = !0));
  }),
    CLOSE_ICON.addEventListener("click", function () {
      STATE &&
        ((OPEN_ICON.style.display = "block"),
        (COLLAPSED.style.top = "-100%"),
        (CLOSE_ICON.style.display = "none"),
        (OVERFLOW.style.display = "none"),
        setTimeout(() => {
          OVERFLOW.style.opacity = "0";
        }, 300),
        (STATE = !1));
    }),
    LIST.forEach((LIST) => {
      LIST.addEventListener("click", () => {
        (OPEN_ICON.style.display = "block"),
          (COLLAPSED.style.top = "-100%"),
          (CLOSE_ICON.style.display = "none"),
          (OVERFLOW.style.display = "none"),
          setTimeout(() => {
            OVERFLOW.style.opacity = "0";
          }, 300),
          (STATE = !1);
      });
    });
});
