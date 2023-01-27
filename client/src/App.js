import './App.css'
import "react-multi-carousel/lib/styles.css"
import Navbar from './components/navbar/Navbar';
import NewNav from './components/newnav/NewNav';
import MainComp from './components/home/MainComp';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Signin from './components/signup_sign/Signin';
import SignUp from './components/signup_sign/SignUp';
import Cart from './components/cart/Cart';
import BuyNow from './components/buynow/BuyNow';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <Router>
      <Navbar/>
      <NewNav/>
      <ToastContainer/>
        <Routes>
          <Route path="/" element={<MainComp/>} />
          <Route path="/login" element={<Signin/>} />
          <Route path="/register" element={<SignUp/>} />
          <Route path="/products/:id" element={<Cart/>} />
          <Route path="/buynow" element={<BuyNow/>} />
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
