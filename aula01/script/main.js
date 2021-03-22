let valorEmDolarTexto

valorEmDolarTexto = prompt("Qual o valor me Dolar que vc quer Converter?")

let valoremDolarNumerico = parseFloat(valorEmDolarTexto)

let valorEmReal = valoremDolarNumerico * 5.50

let valorEmRealFixado = valorEmReal.toFixed(2)

alert(valorEmRealFixado);


//Qualquer coisa aqui dentro
