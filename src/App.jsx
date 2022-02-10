import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './Pages/Home/Home';
import Kabinet from './Pages/Kabinet/Kabinet';
import Login from './Pages/Login/Login';
import Registartsiya from './Pages/Registratsiya/Registartsiya';

function App() {
  return (
    <div className="App">

      {/* ======= rout ====== */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<p>About</p>} />
        <Route path='/kabinet/*' element={<Kabinet />} />
        <Route path='/registr' element={<Registartsiya />} />
        <Route path='/kirish' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
