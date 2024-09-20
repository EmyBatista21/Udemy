import React, { Component } from 'react';
import Membro from './components/Posts';
import Post from './components/Posts';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: 'Insira seu nome...',
      email: 'Insira seu email...',
      senha: '',
      genero: 'Insira seu gênero...'
    }

    this.insereNome = this.insereNome.bind(this);
    this.insereEmail = this.insereEmail.bind(this);
    this.insereGenero = this.insereGenero.bind(this);
}
insereNome(event){
  this.setState({nome: event.target.value})
}

insereEmail(event){
  let valor = event.target.value;
  this.setState({email: valor})
}

insereGenero(event){
  let valor = event.target.value;
  this.setState({genero: valor})
}

render(){
    return(
        <div>
          <h2>Login</h2>
          Nome:
          <input type='name' name='name' value={this.state.nome} onChange={this.insereNome}/> <br/>
          Email:
          <input type='email' name='email' value={this.state.email} onChange={this.insereEmail}/> <br/>
          Senha:
          <input type='password' name='senha' value={this.state.senha} onChange={(event) => this.setState({senha: event.target.value})}/> <br/> 
          Gênero:
          <select name='genero' value={this.state.genero} onChange={this.insereGenero}>
            <option value='Outros'>Outros</option>
            <option value='Não binário'>Não binário</option>
            <option value='Mulher'>Mulher</option>
            <option value='Homem'>Homem</option>
          </select>

          <div>
            <h3>{this.state.nome}</h3>
            <h3>{this.state.email}</h3>
            <h3>{this.state.senha}</h3>
            <h3>{this.state.genero}</h3>
          </div>
        </div>
    );
}
}

export default App;