import { useState } from 'react'
import { Link } from 'react-router-dom'
import './signup.css'

const SignUp = () => {

  const [details , setDetails ] = useState({
    fName:"",
    email:"",
    mobile:"",
    password:"",
    cpassword:""
  })

  console.log(details)

  const handleOnChange = (e)=>{
    setDetails({
      ...details,
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
                  <h1>Sign-Up</h1>
                  <div className="form_data">
                     <label htmlFor="fName">Your name</label>
                     <input type="text" name="fName" value={details.fName} onChange={handleOnChange}  id="fName"/>
                  </div>
                  <div className="form_data">
                     <label htmlFor="email">Email</label>
                     <input type="text" name="email" value={details.email} onChange={handleOnChange}  id="email"/>
                  </div>
                  <div className="form_data">
                    <label htmlFor="number">Mobile</label>
                    <input type="text" name="mobile" value={details.mobile}  onChange={handleOnChange} id="mobile" />
                  </div>
                  <div className="form_data">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={details.password}  onChange={handleOnChange} placeholder='At least 6 char' id="password" />
                  </div>
                  <div className="form_data">
                    <label htmlFor="cpassword">Password Again</label>
                    <input type="password" name="cpassword" value={details.cpassword}  onChange={handleOnChange} placeholder='At least 6 char' id="cpassword" />
                  </div>
                  <button className='signin_btn'>Continue</button>
                  <div className='signin_info'>
                      <p>Already have an account?</p>
                      <Link to="/login">Signin</Link>
                  </div>
                </form>
              </div>
          </div>
      </section>
    </>
  )
}

export default SignUp