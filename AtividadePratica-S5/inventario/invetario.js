/*Curso de Engenharia de Software - UniEVANGÉLICA 
  Disciplina de Programação Web 
  Dev: Carlos Eduardo Cunha Ribeiro
  DATA  23/03/2023*/
import { useState } from "react";

function AdicionarBemForm({ onAdd }) {
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nome && quantidade) {
      onAdd({ nome, quantidade });
      setNome("");
      setQuantidade("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
      </label>
      <label>
        Quantidade:
        <input
          type="number"
          value={quantidade}
          onChange={(event) => setQuantidade(event.target.value)}
        />
      </label>
      <button type="submit">Adicionar</button>
    </form>
  );
}

function InventarioTabela({ bens }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Quantidade</th>
        </tr>
      </thead>
      <tbody>
        {bens.map((bem) => (
          <tr key={bem.nome}>
            <td>{bem.nome}</td>
            <td>{bem.quantidade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function Inventario() {
  const [bens, setBens] = useState([]);

  const handleAdd = (bem) => {
    setBens([...bens, bem]);
  };

  return (
    <div>
      <AdicionarBemForm onAdd={handleAdd} />
      <InventarioTabela bens={bens} />
    </div>
  );
}

