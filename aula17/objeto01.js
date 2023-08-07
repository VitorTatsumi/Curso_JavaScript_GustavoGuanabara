let amigo = {nome: 'José', 
    sexo: 'M',
    peso: 88.5, 
    engordar(p){
        this.peso += p
    }
}

amigo.engordar(5)
console.log(`${amigo.nome} pesa ${amigo.peso} kilos`)