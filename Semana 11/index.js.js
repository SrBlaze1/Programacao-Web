const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

class InventoryItem {
  constructor(id, name, quantity) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
  }
}

class FamilyMember {
  constructor(id, name, age, relationship) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.relationship = relationship;
  }
}

class InventoryController {
  constructor() {
    this.inventory = [
      new InventoryItem(1, 'TV', 2),
      new InventoryItem(2, 'Mesa', 1)
    ];
    this.idCounter = 2;
  }

  createInventoryItem(name, quantity) {
    const id = ++this.idCounter;
    const item = new InventoryItem(id, name, quantity);
    this.inventory.push(item);
    return item;
  }

  getAllInventoryItems() {
    return this.inventory;
  }

  getInventoryItemById(id) {
    const item = this.inventory.find(item => item.id === parseInt(id));
    if (!item) throw new Error('Item não encontrado');
    return item;
  }

  updateInventoryItem(id, name, quantity) {
    const item = this.getInventoryItemById(id);
    item.name = name;
    item.quantity = quantity;
    return item;
  }

  deleteInventoryItem(id) {
    const item = this.getInventoryItemById(id);
    const index = this.inventory.indexOf(item);
    this.inventory.splice(index, 1);
    return item;
  }
}

class FamilyController {
  constructor() {
    this.familyMembers = [
      new FamilyMember(1, 'João', 40, 'Pai'),
      new FamilyMember(2, 'Maria', 35, 'Mãe')
    ];
    this.idCounter = 2;
  }

  createFamilyMember(name, age, relationship) {
    const id = ++this.idCounter;
    const member = new FamilyMember(id, name, age, relationship);
    this.familyMembers.push(member);
    return member;
  }

  getAllFamilyMembers() {
    return this.familyMembers;
  }

  getFamilyMemberById(id) {
    const member = this.familyMembers.find(member => member.id === parseInt(id));
    if (!member) throw new Error('Membro não encontrado');
    return member;
  }

  updateFamilyMember(id, name, age, relationship) {
    const member = this.getFamilyMemberById(id);
    member.name = name;
    member.age = age;
    member.relationship = relationship;
    return member;
  }

  deleteFamilyMember(id) {
    const member = this.getFamilyMemberById(id);
    const index = this.familyMembers.indexOf(member);
    this.familyMembers.splice(index, 1);
    return member;
  }
}

const inventoryController = new InventoryController();
const familyController = new FamilyController();

// Rotas para o inventário
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const InventoryController = require('./controllers/InventoryController');
const InventoryModel = require('./models/InventoryModel');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const inventoryModel = new InventoryModel();
const inventoryController = new InventoryController(inventoryModel);

// CREATE
app.post('/api/inventory', inventoryController.create);

// READ ALL
app.get('/api/inventory', inventoryController.readAll);

// READ ONE
app.get('/api/inventory/:id', inventoryController.readOne);

// UPDATE
app.put('/api/inventory/:id', inventoryController.update);

// DELETE
app.delete('/api/inventory/:id', inventoryController.delete);

app.get('/', (req, res) => {
  res.send('Bem-vindo ao inventário familiar!');
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000!');
});


// models/InventoryModel.js
class InventoryModel {
  constructor() {
    this.inventory = [
      { id: 1, name: 'TV', quantity: 2 },
      { id: 2, name: 'Mesa', quantity: 1 },
    ];
  }

  create(name, quantity) {
    const id = this.inventory.length + 1;
    const item = { id, name, quantity };
    this.inventory.push(item);
    return item;
  }

  readAll() {
    return this.inventory;
  }

  readOne(id) {
    return this.inventory.find((item) => item.id === parseInt(id));
  }

  update(id, name, quantity) {
    const item = this.inventory.find((item) => item.id === parseInt(id));
    if (!item) return null;
    item.name = name;
    item.quantity = quantity;
    return item;
  }

  delete(id) {
    const item = this.inventory.find((item) => item.id === parseInt(id));
    if (!item) return null;
    const index = this.inventory.indexOf(item);
    this.inventory.splice(index, 1);
    return item;
  }
}

module.exports = InventoryModel;


// controllers/InventoryController.js
class InventoryController {
  constructor(model) {
    this.model = model;
    this.create = this.create.bind(this);
    this.readAll = this.readAll.bind(this);
    this.readOne = this.readOne.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  create(req, res) {
    const { name, quantity } = req.body;
    const item = this.model.create(name, quantity);
    if (!item) return res.status(500).send({ message: 'Erro ao criar item' });
    res.send({ message: 'Item adicionado com sucesso!', inputs: item });
  }

  readAll(req, res) {
    const items = this.model.readAll();
    res.send(items);
  }

  readOne(req, res) {
    const { id } = req.params;
    const item = this.model.readOne(id);
    if (!item) return res.status(404).send({ message: 'Item não encontrado' });
    res.send(item);
  }

  update(req, res) {
    const { id } = req.params;
    const { name, quantity } = req.body;
    const item = this.model.update(id, name, quantity);
    if (!item) return res.status(404).send({ message: 'Item não encontrado' });
    res.send({ message: 'Item atualizado com sucesso!', inputs: item });
  }

  delete(req, res) {
    const { id } = req, params;
    const itemIndex = this.inventory.findIndex((item) => item.id === parseInt(id));
    if (itemIndex === -1) {
      return res.status(404).send({ message: 'Item não encontrado' });
    }
    
    const item = this.inventory[itemIndex];
    
    this.inventory.splice(itemIndex, 1);
    
    return res.send({ message: 'Item excluído com sucesso!', inputs: item });
  }
}

module.exports = InventoryController;