/* Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Carlos Eduardo Cunha Ribeiro
DATA: 31/03/2023 */


function validateForm(e) {
  e.preventDefault(); // Evita que o formulário seja submetido e a página seja recarregada


  const form = e.target; // Obtem o formulário que disparou o evento de submit
  const name = form.name.value.trim(); // Obtém o valor do campo nome e remove espaços em branco
  const birthdate = form.birthdate.value.trim(); // Obtém o valor do campo data de nascimento e remove espaços em branco
  const cpf = form.cpf.value.trim(); // Obtém o valor do campo CPF e remove espaços em branco
  const address = form.address.value.trim(); // Obtém o valor do campo endereço e remove espaços em branco
  const phone = form.phone.value.trim(); // Obtém o valor do campo telefone e remove espaços em branco


  if (!name || !birthdate || !cpf || !address || !phone) { // Verifica se algum dos campos obrigatórios não foi preenchido
    alert('Preencha todos os campos obrigatórios.'); // Exibe uma mensagem de alerta solicitando o preenchimento de todos os campos obrigatórios
    return; // Retorna para evitar a submissão do formulário
  }


  const patients = JSON.parse(localStorage.getItem('patients')) || []; // Obtém os dados dos pacientes armazenados no localStorage ou retorna um array vazio
  patients.push({ name, birthdate, cpf, address, phone }); // Adiciona um novo objeto com os dados do paciente ao array de pacientes
  localStorage.setItem('patients', JSON.stringify(patients)); // Armazena o array atualizado no localStorage


  form.reset(); // Limpa o formulário após a submissão
}

const form = document.getElementById('patient-form'); // Obtém o formulário por seu ID
form.addEventListener('submit', validateForm); // Adiciona um evento de submit ao formulário que chama a função validateForm() quando o formulário é submetido