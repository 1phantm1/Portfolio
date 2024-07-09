const button = document.querySelector("button#copy_mail")
const text = "dsescuderop@gmail.com"
button.addEventListener("click", () => {
    navigator.clipboard.writeText(text)
        .then(() => {
            alert("E-mail copiado com sucesso")
        })
        .catch(err => {
            console.log("Erro: ", err)
        })
})
