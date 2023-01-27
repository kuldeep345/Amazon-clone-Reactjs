import './App.css'
import "react-multi-carousel/lib/styles.css"
import Navbar from './components/navbar/Navbar';
import NewNav from './components/newnav/NewNav';
import MainComp from './components/home/MainComp';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Signin from './components/signup_sign/Signin';
import SignUp from './components/signup_sign/SignUp';

function App() {
  return (
    <Router>
      <Navbar/>
      <NewNav/>
        <Routes>
          <Route path="/" element={<MainComp/>} />
          <Route path="/login" element={<Signin/>} />
          <Route path="/register" element={<SignUp/>} />
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
