// Projeto inicial - Jogo do número secreto
alert('Boas vindas ao jogo do número secreto');
let numeroMax = 1000;
// variavel para armazenar o número secreto usando o comando Math.radom() para pseudo aleatorio
let numeroSecreto = parseInt(Math.random() * numeroMax + 1);
// Variável para armazenar o chute do jogador. O chute deve ser convertido para um número 
// inteiro usando parseInt() para garantir que seja comparável ao número secreto.
let chute;
let tentativas = 1;

// Loop para permitir que o jogador continue tentando até acertar o número secreto.
while (chute !== numeroSecreto) {

    chute = parseInt(prompt(`Escolha um número de 1 a ${numeroMax} e tente adivinhar o número secreto!`));

    if (chute == numeroSecreto) {
        break;
    }  else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor do que ${chute}`);
        } else {
            alert(`O número secreto é maior do que ${chute}`);
        }

    // tentativas = tentativas + 1;
        tentativas++;
}
}

//Operador tenário
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Parabéns! Você acertou o número secreto ${numeroSecreto}! com ${tentativas} ${palavraTentativa}.`);