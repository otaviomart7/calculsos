function somar(){
    var numero1 = document.getElementById('n1').valueAsNumber
    var numero2 = document.getElementById('n2').valueAsNumber
    var resposta = document.getElementById('resposta_adicao')
    resposta.textContent = numero1 + numero2
}

function subtrair(){
    var numero1 = document.getElementById('n3').valueAsNumber
    var numero2 = document.getElementById('n4').valueAsNumber
    var resposta = document.getElementById('resposta_subtracao')
    resposta.textContent = numero1 - numero2
}

function dividir(){
    var numero1 = parseFloat(document.getElementById('n5').value)
    var numero2 = parseFloat(document.getElementById('n6').value)
    var resposta = document.getElementById('resposta_divisao')

    if (numero2 ==! 0){
        resposta.textContent = numero1 / numero2
    }else{
        resposta.textContent = 'Não se Divide por 0'
    }
}