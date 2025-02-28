import './App.css';
import Clothing from './component/Clothing';
import Landing from './component/Landing';
import Nav from './component/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Clothing />
    </div>
  );
}

export default App;
