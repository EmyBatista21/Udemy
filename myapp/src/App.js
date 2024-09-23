import React, { useState } from 'react';

function App() {
  const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz',
    'Estudar React'
  ]);

  const [input, setInput] = useState('');

  function addTask(){
    setTarefas([...tarefas, input])
    setInput('');
  }

  return (
    <div>
      <h1>To Do</h1>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <input type='text' value={input} onChange={e => setInput(e.target.value)}/>
      <button type='button' onClick={addTask}
      >Adcionar Tarefa</button>
    </div>
  );
}

export default App;