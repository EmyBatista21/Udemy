import React, { Component } from 'react';
import Membro from './components/Posts';
import Post from './components/Posts';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      feed:[
        {id:1, username:'EmyBatista', curtidas:103, comentarios:2},
        {id:2, username:'Regiane', curtidas:110, comentarios:2},
        {id:3, username:'Erika', curtidas:1000, comentarios:15},
        {id:4, username:'Rick', curtidas:1, comentarios:0},
      ]
    }
}


render(){
    return(
        <div>
         {this.state.feed.map((item) => {
            return(
                <Post key={item.id} username={item.username} curtidas={item.curtidas} comentarios={item.comentarios}/>
            );
         })}
        </div>
    );
}
}

export default App;