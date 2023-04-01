/* Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Carlos Eduardo Cunha Ribeiro
DATA: 31/03/2023 */

document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.getElementById('search-form');
  const patientList = document.getElementById('patient-list');

  const patients = [
    { name: 'João Silva', cpf: '123.456.789-00' },
    { name: 'Maria Souza', cpf: '987.654.321-00' },
    { name: 'Pedro Santos', cpf: '456.123.789-00' },
    { name: 'Camila Pereira', cpf: '789.321.456-00' },
    { name: 'Lucas Oliveira', cpf: '654.987.321-00' },
    { name: 'Julia Almeida', cpf: '321.789.456-00' },
    { name: 'Ricardo Costa', cpf: '456.321.789-00' },
    { name: 'Mariana Lima', cpf: '789.456.321-00' },
  ];

  function displayPatients(patientsToDisplay) {
    patientList.innerHTML = '';
    patientsToDisplay.forEach(patient => {
      const patientDiv = document.createElement('div');
      patientDiv.innerHTML = `<strong>Nome:</strong> ${patient.name} <br> <strong>CPF:</strong> ${patient.cpf}`;
      patientList.appendChild(patientDiv);
    });
  }

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = document.getElementById('search').value.trim().toLowerCase();
    const filteredPatients = patients.filter(patient =>
      patient.name.trim().toLowerCase().includes(searchTerm) || patient.cpf.trim().toLowerCase().includes(searchTerm)
    );
    displayPatients(filteredPatients);
  });

  displayPatients(patients);
});
