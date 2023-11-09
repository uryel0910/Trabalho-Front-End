let carrosel1 = document.getElementById("carrosel1")
let carrosel2 = document.getElementById("carrosel2")

let botaoEsquerda = document.getElementById("botaoEsquerda")
let botaoDireita = document.getElementById("botaoDireita")

botaoDireita.style.cursor = "pointer"
botaoEsquerda.style.cursor = "default"

function rodarEsquerdo() {
    carrosel1.style.left = "5%"
    carrosel1.style.zIndex = "2"
    carrosel2.style.left = "100%"
    carrosel2.style.zIndex = '0'
    botaoDireita.style.cursor = "pointer"
    botaoEsquerda.style.cursor = "default"
}
function rodarDireita() {
    carrosel1.style.left = "-100%"
    carrosel1.style.zIndex = "0"
    carrosel2.style.left = "5%"
    carrosel2.style.zIndex = '2'
    botaoDireita.style.cursor = "default"
    botaoEsquerda.style.cursor = "pointer"
}

