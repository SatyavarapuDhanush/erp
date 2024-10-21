import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Header from './Components/Header';
import Courses from './Pages/Courses';
import Homenav from './Components/Homenav';
import Footer from './Components/Footer';
import Exams from './Pages/Exam/Exams';

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
          <Route path="/nav" element={<Homenav />} />
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer/>}/>
          <Route path="/exams" element={<Exams/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
