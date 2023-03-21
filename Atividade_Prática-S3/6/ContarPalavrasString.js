//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Carlos Eduardo Cunha Ribeiro
//DATA: 21/03/2023

function countWords(str) {
    // Remove espaços em branco no início e fim da string com trim().
    // Divide a string em palavras com split() usando /\s+/ como separador.
    // Retorna o número de palavras com a propriedade length do array resultante.
    return str.trim().split(/\s+/).length;
    }
    // Exemplo de uso:
    var phrase = "O rato roeu a roupa do rei de Roma";
    var wordCount = countWords(phrase);
    console.log(wordCount); // 9