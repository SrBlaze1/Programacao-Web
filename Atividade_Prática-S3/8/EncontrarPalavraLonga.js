//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Carlos Eduardo Cunha Ribeiro
//DATA: 21/03/2023

function encontrarPalavraMaisLonga(str) {
    // Dividir a string em palavras
    const words = str.split(' ');
  
    // Iniciar com a primeira palavra como a mais longa
    let longestWord = words[0];
  
    // Percorrer as palavras do array
    for (let i = 1; i < words.length; i++) {
      // Comparar comprimento da palavra atual com a mais longa
      if (words[i].length > longestWord.length) {
        // Atualizar a palavra mais longa, se necessário
        longestWord = words[i];
      }
    }
  
    // Retornar a palavra mais longa
    return longestWord;
  }
  
  // Exemplo de uso:
  const str = "O algoritmo que encontra a palavra mais longa em uma string fornecida pelo usuário.";
  const longestWord = encontrarPalavraMaisLonga(str);
  console.log(longestWord); // "encontra"