import {Link} from 'react-router-dom';

function Sobre() {
    return (
      <div className="App">
        <h1>Sobre a empresa</h1>

        <Link to="/">Home </Link>
        <Link to="/contato">Contato</Link>
      </div>
    );
}
  
  export default Sobre;
  