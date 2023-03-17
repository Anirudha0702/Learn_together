
import './App.scss';
import About from './pages/about/About';
import Home from "./pages/home/Home"
import Login from './pages/login/Login';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import User from './pages/user/User';
function App() {
  return (
    <>
    <Router>
    <div className="App">
      <Routes>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Routes>
        <Route path='/login' element={<User/>}/>
      </Routes>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
