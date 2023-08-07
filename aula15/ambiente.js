let num = [8, 3, 10, 34, 1, 66, 43]

num.push(101)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O vetor de forma ordenada fica: ${num.sort ()}`)
let pos = num.indexOf(2)
if (pos == -1){
    console.log('Insira um número válido para a busca')
}else {
    console.log(`O valor 66 está na posição ${pos}`)
}