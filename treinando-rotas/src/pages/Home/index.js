import {Link} from 'react-router-dom';

function Home() {
    return (
      <div className="App">
        <h1>Welcome to home</h1>
        <Link to="/sobre">Sobre </Link>
        <Link to="/contato">Contato</Link>

        <hr/>

        <Link to="/produto/123">Acessar produto 123</Link> <br/>
        <Link to="/produto/456">Acessar produto 456</Link>
      </div>
    );
}
  
  export default Home;
  