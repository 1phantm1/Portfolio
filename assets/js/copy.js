const BUTTON=document.querySelector("button#copy_mail")
const TEXT="dsescuderop@gmail.com"
const ALERT=document.querySelector("div#alert")
let alertText=document.querySelector("span#alert-text")
BUTTON.addEventListener("click",()=>{navigator.clipboard.writeText(TEXT).then(()=>{const windowWidth=window.innerWidth
if(windowWidth<450){alertText.innerHTML="Copiado"}else if(windowWidth>450&&windowWidth<600){alertText.innerHTML="Link copiado"}else if(windowWidth>600&&windowWidth<800){alertText.innerHTML="Link copiado com sucesso"}else if(windowWidth>800&&windowWidth<1150){alertText.innerHTML="Copiado para área de transferência"}else if(windowWidth>1150){alertText.innerHTML="Link copiado para área de transferência"}
ALERT.classList.add("show")
setTimeout(()=>{ALERT.classList.remove("show")
alertText.innerHTML=""},3000)}).catch(err=>{console.log("Erro: ",err)
alertText.innerHTML=`ERRO: ${err}`})})