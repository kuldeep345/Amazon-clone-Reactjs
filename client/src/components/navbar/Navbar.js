import './navbar.css'
import {Search , ShoppingCart} from '@mui/icons-material'
import { Avatar, Badge, IconButton , Drawer , Menu , MenuItem ,List, ListItem} from '@mui/material'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { NavLink , useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout, setCart, setUser } from '../../features/slices/userSlice'
import { useEffect, useState } from 'react'
import { Menu as MenuIcon , Logout } from '@mui/icons-material'
import Rightheader from './Rightheader'
import { toast } from 'react-toastify'

const Navbar = () => {

    const cart = useSelector(state => state.persistedReducer.users.cart?.length)
    const user = useSelector(state => state.persistedReducer.users.user)
    const products = useSelector(state => state.persistedReducer.products.products)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handlerClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlerClose = () => {
    setAnchorEl(null);
  };

    const [ dropen , setDropen ] = useState(false)

    const [text , setText] = useState("")
    const [liOpen , setLiopen] = useState(true)
    console.log(text)
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


    const logoutUser = async()=>{
        const res2 = await fetch("/user/logout" , {
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:"include"
        })

        const data2 = await res2.json();
        console.log(data2)

        if(res2.status !== 201){
            console.log("error")
        }
        else{
            console.log("data valid")
            dispatch(logout())
            dispatch(setCart([]))
            navigate("/")
            toast.success("Logout Successful", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
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
                    <input type="text" name="" onFocusCapture={()=>setLiopen(false)} onChange={(e)=>{
                        setText(e.target.value)
                        setLiopen(false)
                        }} id=""/>
                    <div className="search_icon">
                        <Search id="search"/>
                    </div>
                    {
                        text && <List className="extrasearch" hidden={liOpen}>
                            {
                            products && products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                                <Link onClick={()=>setLiopen(true)} to={`/products/${product._id}`}><ListItem key={product._id} >{product.title.longTitle}</ListItem></Link>
                            ))
                            
                            }
                        </List>
                    }
                </div>
            </div>
            <div className="right">
                <div className="nav_btn">
                    <Link to="/login"><span>signin</span></Link>
                </div>
                <div className='cart_btn'>
               { (user==="Invalid credentials" || user==="Internal server error"  || !user)  ?  <NavLink to="/login">
                    <Badge badgeContent="0" color="primary">
                        <ShoppingCart id="icon"/>
                    </Badge>
                </NavLink> : <NavLink to="/buynow ">
                    <Badge badgeContent={`${!cart ? 0 : cart}`} color="primary">
                        <ShoppingCart id="icon"/>
                    </Badge>
                </NavLink>}
                    <p>Cart</p>
                </div>

                {
                    (user==="Invalid credentials" ||  user==="Internal server error"  || !user) ? <Avatar className='avtar'/> : <Avatar className='avtar2' onClick={handlerClick}>{user && user.fName[0].toUpperCase()}</Avatar> 
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
                        {(user==="Invalid credentials" ||  user==="Internal server error"  || !user) ? "" : <MenuItem onClick={()=>{
                            handlerClose();
                            logoutUser();
                        }}><Logout/>{" "}Logout</MenuItem>}
                    </Menu>

            </div>
        </nav>
    </header>
  )
}

export default Navbar
