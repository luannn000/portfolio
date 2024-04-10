import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import './index.css';
import Projetos from './components/Projetos';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/projetos/' element={ <Projetos /> } />
        <Route path="*" element={ <ErrorPage /> } />
      </Routes>
    </HashRouter>
  )
}

export default App
