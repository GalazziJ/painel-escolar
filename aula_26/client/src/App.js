import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home/Home';
import About from './views/About/About';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Navbar from './components/Navbar';
import AddUsuario from './views/Adicionar_usuarios/adicionar_usuarios'
import GestaoUsuarios from './views/GestaoUsuarios/GestaoUsuarios';
import AtualizarUsuarios from './views/AtualizarUsuarios/AtualizarUsuarios';
import Login from './views/Login/Login';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/adicionarUsuario' element={<AddUsuario/>} />
        <Route path='/' element={<Home />} />
        <Route path='/sobrenos' element={<About/>}/>
        <Route path='/gestaoUsuarios' element={<GestaoUsuarios/>}/>
        <Route path='/atualizarUsuarios/:usuario_id' element={<AtualizarUsuarios/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
