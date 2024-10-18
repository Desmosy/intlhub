import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Learn from './Learn/learn';
import Hunt from './Hunt/hunt';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/hunt" element={<Hunt />} />
          <Route path="/learn" element={<Learn />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
