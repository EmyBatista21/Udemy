import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        nome: '',
        email: '',
        senha: '',
        genero: ''
      }
    }
    this.alteraDados = this.alteraDados.bind(this); 

  }

  alteraDados(event) {
    let form = this.state.form;
    form[event.target.name] = event.target.value;
    this.setState({ form: form });
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        Nome:
        <input type='text' name='nome' value={this.state.form.nome} onChange={this.alteraDados} /> <br />
        Email:
        <input type='email' name='email' value={this.state.form.email} onChange={this.alteraDados} /> <br />
        Senha:
        <input type='password' name='senha' value={this.state.form.senha} onChange={this.alteraDados} /> <br />
        Gênero:
        <select name='genero' value={this.state.form.genero} onChange={this.alteraDados}>
          <option value='Outros'>Outros</option>
          <option value='Não binário'>Não binário</option>
          <option value='Mulher'>Mulher</option>
          <option value='Homem'>Homem</option>
        </select>
        <div>
          <h3>{this.state.form.nome}</h3>
          <h3>{this.state.form.email}</h3>
          <h3>{this.state.form.senha}</h3>
          <h3>{this.state.form.genero}</h3>
        </div>
      </div>
    );
  }
}

export default App;