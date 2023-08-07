function horarioAtual(){
    var horaAtual = new Date()
    var horarioH = horaAtual.getHours()
    //var horarioH = 11
    var horarioM = horaAtual.getMinutes()
    var horarioS = horaAtual.getSeconds()
    var image = window.document.getElementById('imagem')
    var txthora = window.document.getElementById('hora')
    txthora.innerHTML = `Agora são ${horarioH}h${horarioM}m${horarioS}s`

    if (horarioH >= 0 && horarioH < 12){
        image.src = 'imagens/morning.jpg'
        document.body.style.background = '#CFB298'
    }else if(horarioH < 18){
        image.src = 'imagens/tarde.jpg'
        document.body.style.background = '#AE5119'
    }else{
        image.src = 'imagens/night.jpg'
        document.body.style.background = '#261B38'
    }
}
