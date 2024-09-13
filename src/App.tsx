import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Strip from './Components/Strip/Strip'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Login from './pages/Login'
import ProductPage from './pages/ProductPage'
import Cart from './pages/Cart'

function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar />
      <Strip/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/products' element={<Product/>}></Route>
        <Route path='/product/:productId' element={<ProductPage/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
      <Footer/>
     </BrowserRouter>
    </div>
  ) 
}

export default App
