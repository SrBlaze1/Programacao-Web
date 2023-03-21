//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Carlos Eduardo Cunha Ribeiro
//DATA: 21/03/2023

function isPrime(num) {
    // Verifica se o número é menor ou igual a 1; se sim, não é primo
    if (num <= 1) {
    return false;
    }
    // Verifica se o número é divisível por algum número entre 2 e metade dele
    for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
    // Se divisível, não é primo
    return false;
    }
    }
    // Caso não seja divisível, é primo
    return true;
    }
    // Exemplo de aplicação:
    const number = 17;
    if (isPrime(number)) {
    console.log(`${number} é primo`);
    } else {
    console.log(`${number} não é primo`);
    }