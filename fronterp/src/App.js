import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Header from './Components/Header';
import Courses from './Pages/Courses';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/header" element={<Header/>}/>
          <Route path="/courses" element={<Courses/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
