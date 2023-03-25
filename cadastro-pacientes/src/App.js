import React, { useState } from 'react';
import './App.css';

function App() {
  const [nome, setNome] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ nome, nascimento, cpf, endereco, telefone });
  };

  return (
    <div className="App">
      <h1>Cadastro de Paciente</h1>
      <form onSubmit={handleSubmit}>
        <label>Nome: <input type="text" value={nome} onChange={e => setNome(e.target.value)} /></label><br />
        <label>Data de Nascimento: <input type="date" value={nascimento} onChange={e => setNascimento(e.target.value)} /></label><br />
        <label>CPF: <input type="text" value={cpf} onChange={e => setCpf(e.target.value)} /></label><br />
        <label>Endereço: <input type="text" value={endereco} onChange={e => setEndereco(e.target.value)} /></label><br />
        <label>Telefone: <input type="tel" value={telefone} onChange={e => setTelefone(e.target.value)} /></label><br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default App;
