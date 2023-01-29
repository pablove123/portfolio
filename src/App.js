import logo from './logo.svg';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/about' element={<About />} />
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/resume' element={<Resume />} />
    </Routes>
    </>
  );
}

export default App;
