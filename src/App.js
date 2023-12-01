
import './App.css';
import NavBar from './jspublico/NavBar';
import "../src/css/Watt.css";

function App() {
  return (
    <div className="App border-radio">
      
      <NavBar />
      <a
        href="https://wa.me/1234567890"
        className="whatsapp-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
      
    </div>
    
  );
}

export default App;
