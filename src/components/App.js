import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './Login';
import Header from './Header';
import Home from './Home';
import Detail from './Detail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
        <Routes>
          <Route exact path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
