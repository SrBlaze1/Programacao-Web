//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Carlos Eduardo Cunha Ribeiro
//DATA: 21/03/2023

// Função para calcular a média de um array de números
function calcularMedia(nums) {
    // Caso o array esteja vazio, retorna null
    if (nums.length === 0) {
      return null;
    }
  
    // Soma todos os números do array
    let soma = 0;
    for (let i = 0; i < nums.length; i++) {
      soma += nums[i];
    }
  
    // Calcula a média dividindo a soma pelo número de elementos do array
    const media = soma / nums.length;
  
    // Retorna a média calculada
    return media;
  }
  
  // Exemplo de uso
  const numeros = [5, 10, 15, 20];
  const media = calcularMedia(numeros);
  console.log(media); // Imprime: 12.5