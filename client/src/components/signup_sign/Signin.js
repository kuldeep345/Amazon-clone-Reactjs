import './signup.css'
import { Link, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { setUser , setCart } from '../../features/slices/userSlice'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Signin = () => {

       const [logdata , setData] = useState({
      email:"",
      password:""
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleOnChange = (e)=>{
      setData({
        ...logdata,
        [e.target.name]:e.target.value
      })
    }

      const handleSubmit = async(e)=>{
      e.preventDefault()
      try {
        const res = await fetch("/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(logdata)
          });
          
          
          const data = await res.json();
          dispatch(setUser(data))
          dispatch(setCart(data.carts))
          navigate("/")

        if (res.status === 400 || !data) {
            console.log("invalid details");
            toast.error("Invalid Details!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });


        } else {
     
            setData({ ...logdata, email: "", password: "" })
            toast.success("Login Successfully done", {
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
    } catch (error) {
        console.log("internal" + error.message);
    }
    }

  return (
    <>
      <section className='formSection'>
          <div className='sign_container'>
              <div className="sign_header">
                 <img src="/darklogo.png" alt="" />
              </div>
              <div className="sign_form">
                <form method='POST' onSubmit={handleSubmit}>
                  <h1>Sign-In</h1>
                  <div className="form_data">
                     <label htmlFor="email">Email</label>
                     <input type="text" name="email" value={logdata.email} onChange={handleOnChange} id="email"/>
                  </div>
                  <div className="form_data">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={logdata.password} onChange={handleOnChange} placeholder='At least 6 char' id="password" />
                  </div>
                  <button type="submit" className='signin_btn'>Continue</button>
                </form>
              </div>
              <div className='create_accountinfo'>
                  <p>New to Amazon</p>
                  <Link to="/register"><button>Create Your amazon account</button></Link>
              </div>
          </div>
      </section>
    </>
  )
}

export default Signin
