import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './views/Login/Login';
import Principal from './views/Principal/Principal';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/principal' element={<Principal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
