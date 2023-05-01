
/* Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Carlos Eduardo Cunha Ribeiro
DATA: 01/05/2023 */

function adicionarItem() {
    var input = document.getElementById("item");
    var lista = document.getElementById("lista");
    var novoItem = document.createElement("li");
    novoItem.innerText = input.value;
    lista.appendChild(novoItem);
    input.value = "";
  }
  
  /* Explicação:

Este trecho de código tem como objetivo realizar a adição de um novo item em uma lista.

Para isso, é obtido o elemento de input do Document Object Model (DOM) usando o ID "item" e armazenado na variável "input". Em seguida, é obtido o elemento de lista do DOM usando o ID "lista" e armazenado na variável "lista".

Através da função createElement(), é criado um novo elemento <li> e armazenado na variável "novoItem". O conteúdo desse novo elemento é definido utilizando a propriedade innerText e o valor presente no input.

Para adicionar o novo item à lista existente, é utilizada a função appendChild() para acrescentar o novo elemento no final da lista.

Por fim, o valor do input é limpo, o que é feito atribuindo uma string vazia à propriedade value.*/