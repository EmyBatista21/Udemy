import React, { useState } from 'react';

function App() {
  const [alunos, setAlunos] = useState([]);
  const [inputNome, setNome] = useState('');
  const [inputCurso, setCurso] = useState('');

  function addInfo(){
    setAlunos([...alunos, {nome: inputNome, curso: inputCurso}]);
    setNome('');
    setCurso('');
  }

  return (
    <div>
      <h1>To Do</h1>
      <ul>
        {alunos.map((aluno, index) => (
          <li key={index}>
            {aluno.nome} - {aluno.curso}
          </li>
        ))}
      </ul>
      <input type='text' placeholder='Nome do Aluno' value={inputNome} onChange={e => setNome(e.target.value)}/> <br/>
      <input type='text' placeholder='Curso do Aluno' value={inputCurso} onChange={e => setCurso(e.target.value)}/> <br/>
      <button type='button' onClick={addInfo}
      >Adcionar Informações</button>
    </div>
  );
}

export default App;