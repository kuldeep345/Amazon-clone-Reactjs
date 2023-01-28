import './navbar.css'
import {Search , ShoppingCart} from '@mui/icons-material'
import { Avatar, Badge } from '@mui/material'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {

    const cart = useSelector(state => state.users.cart.length)

    console.log(cart)

  return (
    <header>
        <nav>
            <div className="left">
                <div className="navlogo">
                    <Link to="/"><img src="/logo.png" alt=""/></Link>
                </div>
                <div className="nav_searchbaar">
                    <input type="text" name="" id=""/>
                    <div className="search_icon">
                        <Search id="search"/>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="nav_btn">
                    <Link to="/login"><span>signin</span></Link>
                </div>
                <div className='cart_btn'>
                <Badge badgeContent={`${cart}`} color="primary">
                        <ShoppingCart id="icon"/>
                    </Badge>
                    <p>Cart</p>
                </div>
                <Avatar className='avtar'/>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
