//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Carlos Eduardo Cunha Ribeiro
//DATA: 21/03/2023

function fatorial(n) {
    // Verifica se n é 0 ou 1
    if (n == 0 || n == 1) {
      return 1;
    } else {
      // Calcula o fatorial usando recursão
      return n * fatorial(n - 1);
    }
  }
  
  // Exemplo: calcula o fatorial de 5
  console.log(fatorial(5)); // Resultado: 120