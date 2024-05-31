
alert("Bem vindo ao Roll the Dice, versão 0.5, compativel com os dados D3, D6 e D20")
 

function Rolagem(numeroDado){
    let resultado;

    numeroDado = Number(numeroDado)
    resultado = Math.floor(Math.random()* numeroDado +1);
    
    
    document.getElementById("resultado").innerText = "A rolagem do D" + numeroDado + " é " + resultado;

return resultado;
}




