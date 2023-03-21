//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Carlos Eduardo Cunha Ribeiro
//DATA: 21/03/2023

// Declara a função fibonacci que recebe num, o valor limite da série
function fibonacci(num) {
    // Inicializa as variáveis a e b com os dois primeiros números da série
    var a = 0;
    var b = 1;
    // Inicializa o array result para armazenar os números da série
    var result = [];
    // Executa o laço enquanto a for menor ou igual ao limite num
    while (a <= num) {
      // Adiciona a ao array result
      result.push(a);
      // Armazena o valor de a em temp e atualiza a e b
      var temp = a;
      a = b;
      b = temp + b;
    }
    // Retorna a série de Fibonacci no array result
    return result;
  }
  // Exemplo de uso:
  // Chama a função fibonacci com limite 20
  var fibonacciSeries = fibonacci(20);
  // Exibe a série no console: [0, 1, 1, 2, 3, 5, 8, 13]
  console.log(fibonacciSeries);