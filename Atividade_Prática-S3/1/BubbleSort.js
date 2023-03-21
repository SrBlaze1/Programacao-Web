
//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Carlos Eduardo Cunha Ribeiro
//DATA: 21/03/2023

// Define a função bubbleSort que aceita um array como argumento.
function bubbleSort(array) {
    // Inicializa a variável len com o tamanho do array.
    var len = array.length;
    // Declara a variável swapped para verificar se ocorreu troca na última iteração.
    var swapped;
    
    // Inicia um loop do-while para ordenar o array.
    do {
        // Define swapped como false, assumindo que não houve troca na iteração atual.
        swapped = false;
        
        // Inicia um loop for para comparar elementos adjacentes do array.
        for (var i = 0; i < len - 1; i++) {
            // Verifica se o elemento atual é maior que o próximo e realiza a troca, se necessário.
            if (array[i] > array[i + 1]) {
                // Troca os valores dos elementos usando uma variável temporária (temp).
                var temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                
                // Define swapped como true, indicando que ocorreu uma troca.
                swapped = true;
            }
        }
        
        // Decrementa len, pois o último elemento está na posição correta.
        len--;
    // Continua o loop do-while até que não haja mais trocas a serem feitas.
    } while (swapped);
    
    // Retorna o array ordenado.
    return array;
}

// Exemplo de uso:
var arr = [5, 3, 8, 4, 2];
var sortedArr = bubbleSort(arr);
console.log(sortedArr);