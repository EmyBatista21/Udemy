import {Link} from 'react-router-dom';

function Contato() {
    return (
      <div className="App">
        <h1>Fale Conosco</h1>
        <span>Contato da empresa (ddd) xx xxxx-xxx</span> <br/>

        <Link to="/">Home </Link>
        <Link to="/sobre">Sobre</Link>
      </div>
    );
}
  
  export default Contato;
  