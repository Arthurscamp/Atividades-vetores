let num = []
let par = []
let imp = []

for(let i = 0; i < 10; i++){
    const numero = parseInt(prompt(`Digite o ${i+1}º número:`));
    num.push(numero);
}
document.write(`<hr>`)

for(let i = 0; i < num.length; i++){
    if(num[i] % 2 == 0){
        par.push(num[i])
    }else{
        imp.push(num[i])
    }
}
document.write(`números = [${num}]`)
document.write(`<hr>`)
document.write(`pares = [${par}]`)
document.write(`<hr>`)
document.write(`impares = [${imp}]`)