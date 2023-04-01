/* Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Carlos Eduardo Cunha Ribeiro
DATA: 31/03/2023 */

document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const patientList = document.getElementById('patient-list');
  
    const patients = [
      { name: 'Carlos Eduardo', cpf: '839.579.190-96' },
      { name: 'Gabriel Cintra', cpf: '257.007.490-09' },
      { name: 'Sebastião Neto', cpf: '499.437.510-02' },
      { name: 'Alexandre Oliveira', cpf: '928.453.380-58' },
      { name: 'Luis Filipe Neuwirth', cpf: '682.390.430-54' },
      { name: 'Douglas Leonel de Almeida', cpf: '370.074.100-65' },
      { name: 'Thiago Silva', cpf: '924.298.720-48' },
      { name: 'Melodias', cpf: '430.912.670-75' },
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
      const searchTerm = document.getElementById('search').value;
      const filteredPatients = patients.filter(patient =>
        patient.name.includes(searchTerm) || patient.cpf.includes(searchTerm)
      );
      displayPatients(filteredPatients);
    });
  
    displayPatients(patients);
  });
