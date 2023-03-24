/* Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Carlos Eduardo Cunha Ribeiro
DATA: 24/03/2023 */

import React, { useState } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  // Função para verificar se há um vencedor
  const checkWinner = () => {
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const condition of winningConditions) {
      const [a, b, c] = condition;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  // Método para lidar com o clique nas células do tabuleiro
  const handleClick = (index) => {
    if (!board[index] && !winner) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);

      const newWinner = checkWinner();
      if (newWinner) {
        setWinner(newWinner);
      } else {
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
      }
    }
  };

  // Renderiza as células do tabuleiro
  const renderCell = (index) => (
    <div className="cell" onClick={() => handleClick(index)}>
      {board[index]}
    </div>
  );

  return (
    <div className="tic-tac-toe">
      <div className="status">
        {winner ? `Vencedor: ${winner}` : `Jogador atual: ${currentPlayer}`}
      </div>
      <div className="board">
        {Array.from({ length: 9 }, (_, index) => renderCell(index))}
      </div>
    </div>
  );
};

export default TicTacToe;