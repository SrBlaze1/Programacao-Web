const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

class InventoryModel {
  constructor() {
    this.inventory = [
      { id: 1, name: 'TV', quantity: 2 },
      { id: 2, name: 'Mesa', quantity: 1 },
    ];
  }

  getAllItems() {
    return this.inventory;
  }

  getItemById(id) {
    return this.inventory.find((item) => item.id === parseInt(id));
  }

  addItem(item) {
    const id = this.inventory.length + 1;
    const newItem = { id, ...item };
    this.inventory.push(newItem);
    return newItem;
  }

  updateItem(id, item) {
    const index = this.inventory.findIndex((item) => item.id === parseInt(id));
    if (index === -1) return null;
    const updatedItem = { id: parseInt(id), ...item };
    this.inventory[index] = updatedItem;
    return updatedItem;
  }

  deleteItem(id) {
    const index = this.inventory.findIndex((item) => item.id === parseInt(id));
    if (index === -1) return null;
    const deletedItem = this.inventory[index];
    this.inventory.splice(index, 1);
    return deletedItem;
  }
}

class InventoryController {
  constructor(model) {
    this.model = model;
  }

  getAllItems(req, res) {
    const items = this.model.getAllItems();
    res.send(items);
  }

  getItemById(req, res) {
    const { id } = req.params;
    const item = this.model.getItemById(id);
    if (!item) return res.status(404).send({ message: 'Item não encontrado' });
    res.send(item);
  }

  addItem(req, res) {
    const { name, quantity } = req.body;
    const item = { name, quantity };
    const newItem = this.model.addItem(item);
    res.send({ message: 'Item adicionado com sucesso!', inputs: newItem });
  }

  updateItem(req, res) {
    const { id } = req.params;
    const { name, quantity } = req.body;
    const updatedItem = this.model.updateItem(id, { name, quantity });
    if (!updatedItem) return res.status(404).send({ message: 'Item não encontrado' });
    res.send({ message: 'Item atualizado com sucesso!', inputs: updatedItem });
  }

  deleteItem(req, res) {
    const { id } = req.params;
    const deletedItem = this.model.deleteItem(id);
    if (!deletedItem) return res.status(404).send({ message: 'Item não encontrado' });
    res.send({ message: 'Item excluído com sucesso!', inputs: deletedItem });
  }
}

const inventoryModel = new InventoryModel();
const inventoryController = new InventoryController(inventoryModel);

app.get('/api/inventory', inventoryController.getAllItems.bind(inventoryController));
app.get('/api/inventory/:id', inventoryController.getItemById.bind(inventoryController));
app.post('/api/inventory', inventoryController.addItem.bind(inventoryController));
app.put('/api/inventory/:id', inventoryController.updateItem.bind(inventoryController));
app.delete('/api/inventory/:id', inventoryController.deleteItem.bind(inventoryController));

app.get('/', (req, res) => {
  res.send('Bem-vindo ao inventário familiar!');
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000!');
});
