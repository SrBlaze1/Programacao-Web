const form = document.getElementById("paciente-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const nascimento = document.getElementById("nascimento").value;
  const cpf = document.getElementById("cpf").value;
  const endereco = document.getElementById("endereco").value;
  const telefone = document.getElementById("telefone").value;

  console.log({ nome, nascimento, cpf, endereco, telefone });
});