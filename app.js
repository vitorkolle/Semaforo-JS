'use strict'

const botaoVermelho = document.getElementById('botao-vermelho')
const botaoAmarelo = document.getElementById('botao-amarelo')
const botaoVerde = document.getElementById('botao-verde')

function mudarCor1(){
    botaoAmarelo.classList.add('transparente')
    botaoVerde.classList.add('transparente')
    botaoVermelho.classList.remove('transparente')
}
function mudarCor2(){
    botaoVermelho.classList.add('transparente')
    botaoVerde.classList.add('transparente')
    botaoAmarelo.classList.remove('transparente')
}
function mudarCor3(){
    botaoAmarelo.classList.add('transparente')
    botaoVermelho.classList.add('transparente')
    botaoVerde.classList.remove('transparente')
    
}
botaoVermelho.addEventListener('click', mudarCor1)
botaoAmarelo.addEventListener('click', mudarCor2)
botaoVerde.addEventListener('click', mudarCor3)