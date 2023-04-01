/* Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Carlos Eduardo Cunha Ribeiro
DATA: 31/03/2023 */

document.getElementById('consulta-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const paciente = document.getElementById('paciente').value;
    const medico = document.getElementById('medico').value;
    const data = document.getElementById('data').value;
    const horario = document.getElementById('horario').value;

    const consulta = {
        paciente,
        medico,
        data,
        horario,
    };

    exibirConsulta(consulta);
    this.reset();
});

function exibirConsulta(consulta) {
    const div = document.createElement('div');
    div.classList.add('consulta');

    div.innerHTML = `
        <p><strong>Paciente:</strong> ${consulta.paciente}</p>
        <p><strong>Médico:</strong> ${consulta.medico}</p>
        <p><strong>Data:</strong> ${consulta.data}</p>
        <p><strong>Horário:</strong> ${consulta.horario}</p>
        <hr>
    `;

    document.getElementById('consultas-list').appendChild(div);
}