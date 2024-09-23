import React, { useEffect, useState } from 'react';

function App() {
  const [tarefas, setTarefas] = useState([]);

  const [input, setInput] = useState('');

  useEffect(() =>{
    const tarefasStorage = localStorage.getItem('tarefas');

    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, []); //Executado quando o componente for renderizado pela primeira vez (componentDidMount), ou seja, isso está sendo controlado pelo o argumento "[]", que significa que esse useEffect só vai rodar quando "tarefas" estiver vazio.
  
  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]); //Executado quando o componente for renderizado toda vez que tarefas for atualizado (componentDidUpdate), ou seja, isso está sendo controlado pelo o argumento "[tarefas]", que significa que esse useEffect só vai toda vez que o estado "tarefas" mudar.


  function addTask(){
    setTarefas([...tarefas, input]);
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
      <input type='text' placeholder='Adicione a tarefa' value={input} onChange={(e) => setInput(e.target.value)}/>
      <button type='button' onClick={addTask}
      >Salvar</button>
    </div>
  );
}

export default App;