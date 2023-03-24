/* Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Carlos Eduardo Cunha Ribeiro
DATA 23/03/2023*/
let inventario = [];

function adicionarBem() {
  let nome = document.getElementById("nome").value;
  let quantidade = document.getElementById("quantidade").value;

  if (nome !== "" && quantidade !== "") {
    let novoBem = {
      nome: nome,
      quantidade: quantidade
    };
    inventario.push(novoBem);
    atualizarTabela();
    limparFormulario();
  }
}

function atualizarTabela() {
  let tabela = document.getElementById("inventario");

  // limpar a tabela
  while (tabela.rows.length > 1) {
    tabela.deleteRow(-1);
  }

  // adicionar os bens à tabela
  for (let i = 0; i < inventario.length; i++) {
    let linha = tabela.insertRow(-1);
    let nomeCelula = linha.insertCell(0);
    let quantidadeCelula = linha.insertCell(1);
    nomeCelula.innerHTML = inventario[i].nome;
    quantidadeCelula.innerHTML = inventario[i].quantidade;
  }
}

function limparFormulario() {
  document.getElementById("nome").value = "";
  document.getElementById("quantidade").value = "";
}
