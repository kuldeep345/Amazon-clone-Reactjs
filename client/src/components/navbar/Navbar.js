import './navbar.css'
import {Search , ShoppingCart} from '@mui/icons-material'
import { Avatar, Badge, IconButton , Drawer , Menu , MenuItem} from '@mui/material'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCart, setUser } from '../../features/slices/userSlice'
import { useEffect, useState } from 'react'
import { Menu as MenuIcon , Logout } from '@mui/icons-material'
import Rightheader from './Rightheader'

const Navbar = () => {

    const cart = useSelector(state => state.persistedReducer.users.cart.length)
    const user = useSelector(state => state.persistedReducer.users.user)
    const dispatch = useDispatch()

    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handlerClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlerClose = () => {
    setAnchorEl(null);
  };

    const [ dropen , setDropen ] = useState(false)

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

    const handleClick = async()=>{
        setDropen(true)
    }    
    const handleClose = async()=>{
        setDropen(false)
    }    

  return (
    <header>
        <nav>
            <div className="left">

            <IconButton className="hamburgur" onClick={handleClick}>
                <MenuIcon style={{color:"#fff"}}/>
            </IconButton>

            <Drawer open={dropen} onClose={handleClose}>
                <Rightheader logClose={handleClose}/>
            </Drawer>

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
                    user ? <Avatar className='avtar2' onClick={handlerClick}>{user && user.fName[0].toUpperCase()}</Avatar> : <Avatar className='avtar'/> 
                 }

                <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handlerClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                      
                        <MenuItem onClick={handlerClose}>My account</MenuItem>
                        {user ? <MenuItem onClick={handlerClose}><Logout/>{" "}Logout</MenuItem> : ""}
                    </Menu>

            </div>
        </nav>
    </header>
  )
}

export default Navbar
