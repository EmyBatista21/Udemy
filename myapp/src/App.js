import React, { useEffect, useMemo, useState } from 'react';

function App() {
  const [tarefas, setTarefas] = useState([]);

  const [input, setInput] = useState('');

  useEffect(() =>{
    const tarefasStorage = localStorage.getItem('tarefas');

    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, []); 
  
  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]); 

  function addTask(){
    setTarefas([...tarefas, input]);
    setInput('');
  }

  const totalTarefas = useMemo(() => tarefas.length, [tarefas]); //Só executa esse calculo quando tarefas sofrer uma alteração. O calculo de tarefas não precisará executar dentro do "return" e isso economiza recursos para tarefas custosas.

  return (
    <div>
      <h1>To Do</h1>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul> 
      <br/>
      
      <strong>Você tem {totalTarefas} tarefas</strong>

      <input type='text' placeholder='Adicione a tarefa' value={input} onChange={(e) => setInput(e.target.value)}/>

      <button type='button' onClick={addTask}
      >Salvar</button>
    </div>
  );
}

export default App;