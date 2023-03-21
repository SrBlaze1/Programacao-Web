//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Carlos Eduardo Cunha Ribeiro
//DATA: 21/03/2023

// A função reverseString inverte a string fornecida como argumento.
function reverseString(str) {
    // Inicializa a variável reversed como uma string vazia para construir a string invertida.
    var reversed = "";
    // Loop for percorre a string str do fim ao início, adicionando cada caractere à variável reversed.
    for (var i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    // Retorna a string invertida após o loop.
    return reversed;
  }
  // Exemplo de uso:
  var str = "Olá, mundo!";
  var reversedStr = reverseString(str);
  console.log(reversedStr);