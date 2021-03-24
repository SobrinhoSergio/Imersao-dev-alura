var numeroSecreto =parseInt (Math.random() * 10)
var tentativas = 3

while (tentativas > 0){
    
    var chute = parseInt(prompt ("digite um número entre 0 e 10:"))
    
    if(numeroSecreto == chute){
        alert ("acertou parabéns")
        break
    }

    else if(chute > numeroSecreto){
        alert ("o número é menor tente novamente") 
        tentativas = tentativas - 1
        
    }

    else if(chute < numeroSecreto){
        alert ("O número é maior tente novamente") 

    }
    
    tentativas = tentativas - 1
    
    }

if (chute != numeroSecreto){
    
    alert("infelizmente suas tentativas acabaram, o número secreto era " + numeroSecreto)

}