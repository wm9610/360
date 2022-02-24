import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import Typo from './domain/typography/Typography';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/typography" element={<Typo data={'fff'} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
