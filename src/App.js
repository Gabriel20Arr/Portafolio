import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './views/home/Home';
import SobreMi from './Component/SobreMi/SobreMi';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/sobre-mi' element={ <SobreMi /> } />
        {/* <Route path='/' element={} /> */}
      </Routes>
    </div>
  );
}

export default App;
