function tabuada() {
    let num = document.getElementById('inumero')
    let resul = document.getElementById('itabuada')
    if (num.value.length == 0) {
        window.alert('Número incorreto.')
    }else {
        let n = Number(num.value)
        let i = 1
        resul.innerHTML = ""
        while(i <= 10){
            let item = document.createElement('option')
            item.text = `${n} X ${i} = ${n*i}`
            item.value = `tab${i}`
            resul.appendChild(item)
            i++
        }
    }
}