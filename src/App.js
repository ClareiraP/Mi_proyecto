/*import logo from './logo.svg';*/
import './App.css';
import Function from './components/Function';
import Class from '/components/Class';
import NavBar from './components/NavBar';

function App() {
  
  return (
    <div className="App">
    <header className="App-header">
      <p>
        Prueba de React
      </p>
    </header>
    <Class name="TEST"/>
    <Function name="TEST"/>
    
    {/*<NavBar></NavBar>*/}
    <List></List>
    
        </div>
  );
}

export default App;
 