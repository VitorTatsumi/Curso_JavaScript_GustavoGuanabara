let vetor = []
let txtnum = document.querySelector('input#numero')
let tabela = document.querySelector('select#tabela')
let resul = document.querySelector('div#res')

function isNumber(numero){
    if(Number(numero) >= 1 && Number(numero) <= 100){
        return true
    }else{
        return false
    }
}

function inList(numero, lista) {
    if(lista.indexOf(Number(numero)) != -1){
        return true
    }else {
        return false
    }
}

function adicionar(){
    if(isNumber(txtnum.value) && !inList(txtnum.value, vetor)){
        let item = document.createElement('option')
        item.text = `Número ${txtnum.value} inserido!` 
        tabela.appendChild(item)
        resul.innerHTML = ''
        vetor.push(Number(txtnum.value))
    }else{
        window.alert('Insira um valor válido!')
    }
    txtnum.value = ''
    txtnum.focus()
}

function finalizar(){
    if(vetor.length == 0){
        alert('Insira valores!')
    }else {
        resul.innerHTML = ''
        resul.innerHTML = `Ao todo temos ${vetor.length} números cadastrados`

        let maior = vetor[0]
        let menor = vetor[0]
        let soma = 0

        for (let i in vetor){
            soma += vetor[i]
            if (vetor[i] > maior){
                maior = vetor[i]
            }else{
                menor = vetor[i]
            }
        }

        resul.innerHTML += `<br>O maior valor informado foi ${maior}`
        resul.innerHTML += `<br>O menor valor informado foi ${menor}`
        resul.innerHTML += `<br>A soma dos valores é de  ${soma}`
        resul.innerHTML += `<br>A média dos valores é de ${soma / vetor.length}`
    }
    
}
