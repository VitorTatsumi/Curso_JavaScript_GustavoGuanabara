//Recursividade
function fatorial(n){
    if(n==1){
        return 1
    }else {
        return n*fatorial(n-1)
    }
}

/*
O fatorial de um número pode ser calculado das duas formas:
5! = 5 x 4 x 3 x 2 x 1 = 120
n! = n x (n-1)! = 120
 */

console.log(fatorial(5))