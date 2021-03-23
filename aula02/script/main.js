let primeiroValor = parseInt(prompt("Digite o primeiro valor: "))
let segundoValor = parseInt(prompt("Digite o segundo valor: "))

let operador = prompt("Forneca o Operador: ")

let resultado

let res = document.getElementById('res')

if(operador=='*'){
    resultado = primeiroValor*segundoValor
    document.write("<h2>"+primeiroValor+operador+segundoValor+"="+resultado+"</h2>")
}

else if(operador=='+'){
    resultado = primeiroValor+segundoValor
    document.write("<h2>"+primeiroValor+operador+segundoValor+"="+resultado+"</h2>")
}

else if(operador=='-'){
    resultado = primeiroValor-segundoValor
    document.write("<h2>"+primeiroValor+operador+segundoValor+"="+resultado+"</h2>")
}

else if(operador=='/'){
    resultado = primeiroValor/segundoValor
    document.write("<h2>"+primeiroValor+operador+segundoValor+"="+resultado+"</h2>")
}

else{
    alert('Não é possível fazer operação!')
}


