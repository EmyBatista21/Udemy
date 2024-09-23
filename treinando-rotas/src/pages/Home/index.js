import {Link} from 'react-router-dom';

function Home() {
    return (
      <div className="App">
        <h1>Welcome to home</h1>
        <Link to="/sobre">Sobre </Link>
        <Link to="/contato">Contato</Link>
      </div>
    );
}
  
  export default Home;
  