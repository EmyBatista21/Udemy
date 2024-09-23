import React, { useCallback, useEffect, useMemo, useState } from 'react';

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

  const addTask = useCallback(() => {
    setTarefas([...tarefas, input]);
    setInput('');
  }, [input, tarefas]);

  // A quando addTask era função ela está dentro de outra função, então temo duas variaveis 'input' e 'tarefa'. Toda vez que o componente era renderizado a função addTask era recriada, mas só faz sentido ela ser recriada quando tanto 'input' ou 'tarefas' forem atualizada. Então o useCallback é utilizado para memorizar uma função, ou seja, ele garante que uma função será recriada apenas quando alguma de suas dependências mudar. Isso é útil para evitar a criação de novas instâncias de funções desnecessariamente, o que pode melhorar a performance do componente. 

  const totalTarefas = useMemo(() => tarefas.length, [tarefas]); 
  //Só executa esse calculo quando tarefas sofrer uma alteração. O calculo de tarefas não precisará executar dentro do "return" e isso economiza recursos para tarefas custosas.



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
