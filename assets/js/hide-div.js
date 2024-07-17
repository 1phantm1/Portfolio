const HIDDEN = document.querySelector("div#hide-div"),
 SHOWMORE = document.querySelector("p#show-more"),
 SHOWLESS = document.querySelector("p#show-less");

SHOWMORE.addEventListener("click", () => {
  HIDDEN.classList.add("active"),
    (SHOWMORE.style.display = "none"),
    (SHOWLESS.style.display = "block");
}),
  SHOWLESS.addEventListener("click", () => {
    HIDDEN.classList.remove("active"),
      (SHOWMORE.style.display = "block"),
      (SHOWLESS.style.display = "none");
  });
