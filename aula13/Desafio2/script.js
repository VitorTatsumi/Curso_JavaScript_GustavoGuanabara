var dataAtual = new Date()
var anoAtual = dataAtual.getFullYear()

function verificar() {
    var anonascimento = window.document.getElementById('anoNasc')
    var sexoUsu = window.document.getElementsByName('sexo')
    var resultado = window.document.getElementById('res')
    var idadeUsu = anoAtual - anonascimento.value
    var image = window.document.getElementById('imagem')

    
    if (anonascimento.value > anoAtual || anonascimento.value.length == 0){
        alert('Preencha os campos corretamente!')
    }else{
        if (sexoUsu[0].checked){
            resultado.innerHTML = `Detectamos: Sexo Masculino com idade de ${idadeUsu} anos`
            
            if(idadeUsu >= 65){
                image.src = 'imagens/IdosoM.jpg'
            }else if(idadeUsu >= 25){
                image.src = 'imagens/AdultoM.jpg'
            }else if(idadeUsu >= 12){ 
                image.src = 'imagens/AdolescenteM.jpg'
            }else{
                image.src = 'imagens/CriancaM.jpg'
            }
        }else{
            resultado.innerHTML = `Detectamos: Sexo Feminino com idade de ${idadeUsu} anos`
            
            if(idadeUsu >= 65){
                image.src = 'imagens/IdosoF.jpg'
            }else if(idadeUsu >= 25){
                image.src = 'imagens/AdultoF.jpg'
            }else if(idadeUsu >= 12){
                image.src = 'imagens/AdolescenteF.jpg'
            }else{
                image.src = 'imagens/CriancaF.jpg'
            }
        }
    }

    
    

}