let botao = document.querySelector("#botao");

botao.addEventListener("mouseover", e =>{
    botao.style.background="rgb(104, 104, 202)";
});

botao.addEventListener("mouseout", e =>{
    botao.style.background="white";
});


botao.addEventListener("click", e =>{
    botao.style.background="rgb(104, 104, 202)";
    botao.innerHTML ="Não desista, continue tentando acredite nos seus sonhos";
});

