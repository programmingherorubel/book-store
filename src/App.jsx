import 'animate.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import CartPage from './Pages/CartPage'
import Books from './Pages/Books';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from './components/NotFound';

function App() {
  

  return (
    <div className="App">
            
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/books' element={<Books/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='/cart' element={<CartPage />}></Route>
                <Route path='/*' element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
        <ToastContainer/>
    </div>
  )
}

export default App
