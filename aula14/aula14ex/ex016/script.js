function contar() {
    var inicio = window.document.querySelector('input#inicio')
    var fim = window.document.querySelector('input#fim')
    var passo = window.document.querySelector('input#passo')
    var res = window.document.querySelector('div#resultado')
    var inicioN = Number(inicio.value)
    var fimN = Number(fim.value)
    var passoN = Number(passo.value)
    res.innerHTML = ''

    if(passo.value <= 0){
        alert('[ERRO] FALTAM DADOS!')
    }else{
        if(inicioN <= fimN){
            while (inicioN <= fimN){
                res.innerHTML += `${inicioN} &#10145 `
                inicioN = inicioN + passoN
            }
        }else{
            while (inicioN >= fimN){
                res.innerHTML += `${inicioN} &#10145 `
                inicioN = inicioN - passoN
            }
        }
        res.innerHTML += `&#9989 `
    }
    
}