/* Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Carlos Eduardo Cunha Ribeiro
DATA: 31/03/2023 */

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('appointment-form');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const calendar = document.getElementById('calendar');
      const time = document.getElementById('time');
      const doctor = document.getElementById('doctor');
      const appointmentType = document.getElementById('appointment-type');
  
      if (validateFields(calendar, time, doctor, appointmentType)) {
        // Adicione a lógica para salvar o agendamento da consulta
        alert('Consulta agendada com sucesso!');
        form.reset();
      } else {
        alert('Por favor, preencha todos os campos corretamente.');
      }
    });
  });
  
  function validateFields(calendar, time, doctor, appointmentType) {
    return (
      calendar.value !== '' &&
      time.value !== '' &&
      doctor.value !== '' &&
      appointmentType.value !== ''
    );
  }