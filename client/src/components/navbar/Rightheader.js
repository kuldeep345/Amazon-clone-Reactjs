import './rightheader.css'
import { useSelector } from 'react-redux'
import { Avatar, Divider } from '@mui/material'
import { Link, NavLink } from 'react-router-dom'
import { Logout } from '@mui/icons-material'

const Rightheader = ({logClose}) => {

    const user = useSelector(state => state.persistedReducer.users.user)
  
  return (
    <div className='rightheader'>
        <div className='right_nav'>
        {
          user ? <Avatar className='avtar2'>{user && user.fName[0].toUpperCase()}</Avatar> : <Avatar className='avtar'/> 
        }
        {user ? <h3>Helloo, {user.fName.toUpperCase()}</h3> : ""}
         </div>
        <div className="nav_btn" onClick={()=>logClose()}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">Shop By category</NavLink>

            <Divider style={{ width:"100%" , marginLeft:"-20px" }}/>

            <NavLink to="/">today's  Deal</NavLink>
           { user ? <NavLink to="/buynow">Your orders</NavLink> : <NavLink to="/login">Your orders</NavLink>
           }
           <Divider/>
           
           <div className="flag">
            <NavLink to="/">Settings</NavLink>
            <img src="" alt="" />
           </div>

           {
            user ? <div className="nav_btn" style={{flexDirection:"row"}}><Logout/><span>Logout</span></div> :  <div className="nav_btn">
            <Link to="/login"><span>signin</span></Link></div>
           }
       
        </div>
    </div>
  )
}

export default Rightheader