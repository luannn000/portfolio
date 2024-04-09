import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import './index.css';
import Projetos from './components/Projetos';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/projetos' element={ <Projetos /> } />
      </Routes>
    </HashRouter>
  )
}

export default App
