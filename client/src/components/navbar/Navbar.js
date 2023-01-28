import './navbar.css'
import {Search , ShoppingCart} from '@mui/icons-material'
import { Avatar, Badge } from '@mui/material'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCart, setUser } from '../../features/slices/userSlice'
import { useEffect } from 'react'

const Navbar = () => {

    const cart = useSelector(state => state.persistedReducer.users.cart.length)
    const user = useSelector(state => state.persistedReducer.users.user)
    const dispatch = useDispatch()
    const getdetailvaliduser = async()=>{
        const res = await fetch("/user/validUser" , {
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:"include"
        });

        const data = await res.json();
        
        if(res.status !== 201){
            console.log("error")
        }
        else{
            console.log("data valid")
            dispatch(setUser(data))
            dispatch(setCart(data.carts))
        }
    }

    useEffect(() => {
        getdetailvaliduser()
    }, [])
    

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
               {user ? <NavLink to="/buynow ">
                    <Badge badgeContent={`${!cart ? 0 : cart}`} color="primary">
                        <ShoppingCart id="icon"/>
                    </Badge>
                </NavLink> : <NavLink to="/login">
                    <Badge badgeContent="0" color="primary">
                        <ShoppingCart id="icon"/>
                    </Badge>
                </NavLink>}
                    <p>Cart</p>
                </div>

                {
                    user ? <Avatar className='avtar2'>{user && user.fName[0].toUpperCase()}</Avatar> : <Avatar className='avtar'/> 
                 }

            </div>
        </nav>
    </header>
  )
}

export default Navbar
