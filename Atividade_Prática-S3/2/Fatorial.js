//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Carlos Eduardo Cunha Ribeiro
//DATA: 21/03/2023

function fatorial(n) {
    // Caso base: fatorial de 0 e 1 é igual a 1
    if (n === 0 || n === 1) {
    return 1;
    } else {
    // Inicia o cálculo do fatorial com o valor de n
    var fatorial = n;
    // Multiplica o fatorial por todos os números menores que n
    for (var i = n - 1; i >= 1; i--) {
    fatorial *= i;
    }
    // Devolve o fatorial calculado
    return fatorial;
    }
    }
    // Exemplo de uso da função
    var num = 5;
    var resultado = fatorial(num);
    console.log(resultado); // 120