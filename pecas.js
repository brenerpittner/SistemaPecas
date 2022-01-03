let pesoPeca = 50

//pesoPeca  =  Camel Case
//peso_Peca =  Snake Case
//PesoPeca  =  Pascal Case

if(pesoPeca > 100){
    console.log("Peso maior que 100g, cadastro autorizado")
}else{
    console.log("Peso menor que 100g, cadastro não autorizado")
}

let numeroPecas = 8

if(numeroPecas < 10){
    console.log("Ainda há espaço na caixa, podemos cadastrar a peça")
}else{
    console.log("Não há espaço disponível na caixa")
}

let nomePeca = "Disco de freio"
console.log("O comprimento da peça é:", nomePeca.length)

if(nomePeca.length < 3){
    console.log("Nome de peça muito curto, não é possível cadastrar")
}else{
    console.log("Nome de peça adequado, é possível cadastrar")
}
