//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Carlos Eduardo Cunha Ribeiro
//DATA: 21/03/2023

// A função sumMatrix recebe uma matriz e retorna a soma de seus elementos.
function sumMatrix(matrix) {
    // Inicializa a variável sum com 0.
    var sum = 0;
  
    // Percorre cada linha da matriz.
    for (var i = 0; i < matrix.length; i++) {
      // Percorre cada elemento da linha atual.
      for (var j = 0; j < matrix[i].length; j++) {
        // Soma o elemento atual à variável sum.
        sum += matrix[i][j];
      }
    }
  
    // Retorna o valor total da soma.
    return sum;
  }
  
  // Exemplo de uso:
  var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  var totalSum = sumMatrix(matrix);
  console.log(totalSum);