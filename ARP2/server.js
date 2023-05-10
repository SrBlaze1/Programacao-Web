//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Carlos Eduardo Cunha Ribeiro 
//DATA 09/05/2023

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Rota raiz
app.get('/', (req, res) => {
  res.send('API para cadastro de pacientes e agendamentos de consultas');
});

// Dados em memória para pacientes e consultas
let pacientes = [];
let consultas = [];

// Rotas para pacientes
app.get('/pacientes', (req, res) => {
  res.json(pacientes);
});

app.post('/pacientes', (req, res) => {
  const { id, nome, idade } = req.body;
  const novoPaciente = { id, nome, idade };
  pacientes.push(novoPaciente);
  res.status(201).json(novoPaciente);
});

app.get('/pacientes/:id', (req, res) => {
  const pacienteId = parseInt(req.params.id);
  const paciente = pacientes.find((p) => p.id === pacienteId);
  if (paciente) {
    res.json(paciente);
  } else {
    res.status(404).json({ mensagem: 'Paciente não encontrado' });
  }
});

app.put('/pacientes/:id', (req, res) => {
  const pacienteId = parseInt(req.params.id);
  const pacienteIndex = pacientes.findIndex((p) => p.id === pacienteId);
  if (pacienteIndex !== -1) {
    pacientes[pacienteIndex] = { ...pacientes[pacienteIndex], ...req.body };
    res.json(pacientes[pacienteIndex]);
  } else {
    res.status(404).json({ mensagem: 'Paciente não encontrado' });
  }
});

app.delete('/pacientes/:id', (req, res) => {
  const pacienteId = parseInt(req.params.id);
  const pacienteIndex = pacientes.findIndex((p) => p.id === pacienteId);
  if (pacienteIndex !== -1) {
    const pacienteRemovido = pacientes.splice(pacienteIndex, 1);
    res.json(pacienteRemovido[0]);
  } else {
    res.status(404).json({ mensagem: 'Paciente não encontrado' });
  }
});

// Rotas para agendamentos de consultas
app.get('/consultas', (req, res) => {
  res.json(consultas);
});

app.post('/consultas', (req, res) => {
  const { id, pacienteId, data, horario } = req.body;
  const novaConsulta = { id, pacienteId, data, horario };
  consultas.push(novaConsulta);
  res.status(201).json(novaConsulta);
});

app.get('/consultas/:id', (req, res) => {
  const consultaId = parseInt(req.params.id);
  const consulta = consultas.find((c) => c.id === consultaId);
  if (consulta) {
    res.json(consulta);
  } else {
    res.status(404).json({ mensagem: 'Consulta não encontrada' });
  }
});

app.put('/consultas/:id', (req, res) => {
    const consultaId = parseInt(req.params.id);
    const consultaIndex = consultas.findIndex((c) => c.id === consultaId);
    if (consultaIndex !== -1) {
      consultas[consultaIndex] = { ...consultas[consultaIndex], ...req.body };
      res.json(consultas[consultaIndex]);
    } else {
      res.status(404).json({ mensagem: 'Consulta não encontrada' });
    }
  });
  
  app.delete('/consultas/:id', (req, res) => {
    const consultaId = parseInt(req.params.id);
    const consultaIndex = consultas.findIndex((c) => c.id === consultaId);
    if (consultaIndex !== -1) {
      const consultaRemovida = consultas.splice(consultaIndex, 1);
      res.json(consultaRemovida[0]);
    } else {
      res.status(404).json({ mensagem: 'Consulta não encontrada' });
    }
  });
  
  // Iniciar o servidor
  app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
  });
  