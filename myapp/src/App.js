import React, { Component } from 'react';
import './estilo.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botao: 'GO'
    }

    this.timer = null;

    this.goOrPause = this.goOrPause.bind(this);
    this.clear = this.clear.bind(this);
  }

  goOrPause(){
    let state = this.state;
    if(this.timer !==null){
      clearInterval(this.timer);
      this.timer = null;
      state.botao = 'GO';
    }else{
      let state = this.state;
      this.timer = setInterval(() => {
        state.numero += 0.1;
        this.setState(state);
      }, 100)
      state.botao = 'PAUSE'
    }
    this.setState(state);
  }

  clear(){
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
    }

    let state = this.state;
    state.numero = 0;
    state.botao = 'VAI';
    this.setState(state);
  }


  render() {
    return (
      <div className='container'>
        <img className='img' src={require('./assets/cronometro.png')}/>
        <a className='timer'>{this.state.numero.toFixed(1)}</a>

        <div className='areaButton'>
          <a onClick={this.goOrPause} className='button'>{this.state.botao}</a>
          <a onClick={this.clear} className='button'>Clear</a>
        </div>
      </div>
    );
  }
}

export default App;