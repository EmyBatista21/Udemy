import React, { Component } from 'react';
import './estilo.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: ''
    }

    this.frases = [
      'Cale a boca de quem acreditou em você.',
      'Siga os erros e aprenda com eles.',
      'O bom-senso é superestimado e pouco útil.',
      'O riso é a menor distância entre a solidão e a tristeza.',
      'Preocupe-se sempre, pois a felicidade é ilusória.',
      'Ignore o óbvio, não pense no improvável e aceite o impossível.',
      'Acredite em tragédias, pois elas sempre acontecem.',
      'A maior barreira para o sucesso é a esperança no futuro.'
    ];  
    this.quebraBiscoito = this.quebraBiscoito.bind(this);
  }

  quebraBiscoito(){
    let state = this.state
    let numeroAletario = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = '" ' + this.frases[numeroAletario] + ' "';
    this.setState(state);
  }
  render() {
    return (
      <div className='container'>
        <img className='imagem' src={require('./assets/biscoito.png')}></img>
        <Botao nome="Abrir biscoito" acaoBtn = {this.quebraBiscoito} />
        <h3 className='textoFrase'>{this.state.textoFrase}</h3>
      </div>
    );
  }
}

class Botao extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    );
  }
}


export default App;