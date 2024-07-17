const BUTTON = document.querySelector("button#copy_mail"),
  TEXT = "dsescuderop@gmail.com",
  ALERT = document.querySelector("div#alert");
let alertText = document.querySelector("span#alert-text");
BUTTON.addEventListener("click", () => {
  navigator.clipboard
    .writeText(TEXT)
    .then(() => {
      const SCREEN_WIDTH = window.innerWidth;
      SCREEN_WIDTH < 450
        ? (alertText.innerHTML = "Copiado")
        : SCREEN_WIDTH > 450 && SCREEN_WIDTH < 600
        ? (alertText.innerHTML = "Link copiado")
        : SCREEN_WIDTH > 600 && SCREEN_WIDTH < 800
        ? (alertText.innerHTML = "Link copiado com sucesso")
        : SCREEN_WIDTH > 800 && SCREEN_WIDTH < 1150
        ? (alertText.innerHTML = "Copiado para área de transferência")
        : SCREEN_WIDTH > 1150 &&
          (alertText.innerHTML = "Link copiado para área de transferência"),
        ALERT.classList.add("show"),
        setTimeout(() => {
          ALERT.classList.remove("show"), (alertText.innerHTML = "");
        }, 2100);
    })
    .catch((SCREEN_WIDTH) => {
      console.log("Erro: ", SCREEN_WIDTH),
        (alertText.innerHTML = `ERRO: ${SCREEN_WIDTH}`);
    });
});
