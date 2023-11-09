let NOME_CLASSE_BOTAO = 'botao-graus'
let NOME_CLASSE_BOTAO_ATIVO = 'botao-graus-ativo'

let botoes = Array.from(document.getElementsByClassName(NOME_CLASSE_BOTAO))
console.log(true)
console.log(botoes)
function selecionar(id) {
  botoes.forEach(botao => {
    if (botao.id === id) botao.classList.add(NOME_CLASSE_BOTAO_ATIVO)
    else botao.classList.remove(NOME_CLASSE_BOTAO_ATIVO)
  })
}

botoes.forEach(botao => botao.addEventListener('click', () => selecionar(botao.id)))
botoes[0].classList.add(NOME_CLASSE_BOTAO_ATIVO)