import './signup.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Signin = () => {

    const [logdata , setData] = useState({
      email:"",
      password:""
    })


    console.log(logdata)

    const handleOnChange = (e)=>{
      setData({
        ...logdata,
        [e.target.name]:e.target.value
      })
    }

  return (
    <>
      <section className='formSection'>
          <div className='sign_container'>
              <div className="sign_header">
                 <img src="/darklogo.png" alt="" />
              </div>
              <div className="sign_form">
                <form>
                  <h1>Sign-In</h1>
                  <div className="form_data">
                     <label htmlFor="email">Email</label>
                     <input type="text" name="email" value={logdata.email} onChange={handleOnChange} id="email"/>
                  </div>
                  <div className="form_data">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={logdata.password} onChange={handleOnChange} placeholder='At least 6 char' id="password" />
                  </div>
                  <button className='signin_btn'>Continue</button>
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
