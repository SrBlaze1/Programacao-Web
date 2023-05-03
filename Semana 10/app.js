/* Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Carlos Eduardo Cunha Ribeiro
DATA: 01/05/2023 */

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let inventory = [
  { id: 1, name: 'TV', quantity: 2 },
  { id: 2, name: 'Mesa', quantity: 1 },
];

// Create
app.post('/api/inventory', (req, res) => {
  const { name, quantity } = req.body;
  const id = inventory.length + 1;
  const item = { id, name, quantity };
  inventory.push(item);
  res.send({ message: 'Item adicionado com sucesso!', inputs: item });
});

// ler todo
app.get('/api/inventory', (req, res) => {
  res.send(inventory);
});

// Ler o primeiro
app.get('/api/inventory/:id', (req, res) => {
  const { id } = req.params;
  const item = inventory.find((item) => item.id === parseInt(id));
  if (!item) return res.status(404).send({ message: 'Item não encontrado' });
  res.send(item);
});

// Update
app.put('/api/inventory/:id', (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;
  const item = inventory.find((item) => item.id === parseInt(id));
  if (!item) return res.status(404).send({ message: 'Item não encontrado' });
  item.name = name;
  item.quantity = quantity;
  res.send({ message: 'Item atualizado com sucesso!', inputs: item });
});

// Delete
app.delete('/api/inventory/:id', (req, res) => {
  const { id } = req.params;
  const item = inventory.find((item) => item.id === parseInt(id));
  if (!item) return res.status(404).send({ message: 'Item não encontrado' });
  const index = inventory.indexOf(item);
  inventory.splice(index, 1);
  res.send({ message: 'Item excluído com sucesso!', inputs: item });
});

app.get('/', (req, res) => {
  res.send('Bem-vindo ao inventário familiar!');
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000!');
});
