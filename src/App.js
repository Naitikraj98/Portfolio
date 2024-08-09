import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Pages/Header';
import Footer from './Pages/Footer';
import Resume from './Pages/Resume';
import About from './Pages/About';
import Web from './Pages/Project/Explore/Web';
import Chat from './Pages/Project/Explore/Chat';
import Detection from './Pages/Project/Explore/DXC';
import GlassDetection from './Pages/Project/Explore/GD';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Header' element={<Header />} />
        <Route path='Footer' element={<Footer />} />
        <Route path='Resume' element={<Resume />} />
        <Route path='About' element={<About />} />
        <Route path='Web' element={<Web />} />        
        <Route path='Chat' element={<Chat />} />
        <Route path='Detection' element={<Detection />} />
        <Route path='GlassDetection' element={<GlassDetection />} />
      </Routes>

    </div>
  );
}

export default App;
