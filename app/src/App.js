
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Adoptuj from './pages/Adoptuj';
import Adopcja from './pages/Adopcja';
import Home from './pages/Home';
import Login from './pages/Login';
import Rejestracja from './pages/Rejestracja';
import ErrorPage from './pages/ErrorPage';
import Zwierze from './pages/Zwierze';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <Router>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/adopcja' element={<Adopcja />}/>
              <Route path='/adoptuj' element={<Adoptuj />}/>
              <Route path='/login' element={<Login />}/>
              <Route path='/rejestracja' element={<Rejestracja />}/>
              <Route path='*' element={<ErrorPage />}/>
              <Route path="/zwierze/:id" element={<Zwierze />} />
            </Routes>
        </Router>
        <Footer/>
    </div>
  );
}

export default App;
