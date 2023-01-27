import { useState } from 'react'
import { Link } from 'react-router-dom'
import './signup.css'
import { useAddNewUserMutation } from '../../features/api/crudApi'
import { toast } from 'react-toastify'

const SignUp = () => {

  const [addNewUser, result ] = useAddNewUserMutation()

  const [details , setDetails ] = useState({
    fName:"",
    email:"",
    mobile:"",
    password:"",
    cpassword:""
  })

  console.log(result)

  const handleOnChange = (e)=>{
    setDetails({
      ...details,
        [e.target.name]:e.target.value
    })
  }

  const handleSubmit = async(e)=>{
         e.preventDefault()
      try {
        await addNewUser(details).unwrap()        
        setDetails({
          ...details,
          fName:"",
          email:"",
          mobile:"",
          password:"",
          cpassword:""
        })
        toast.success('Your account has been created', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      } catch (err) {
        console.error('Failed to save the post: ', err)
        toast.error(`${result?.error.data.error}`, {
          position: "top-right",
          autoClose: 5000,
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
    <>
          <section className='formSection'>
          <div className='sign_container'>
              <div className="sign_header">
                 <img src="/darklogo.png" alt="" />
              </div>
              <div className="sign_form">
                <form method="POST" onSubmit={handleSubmit}>
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
                    <input max={10} type="text" name="mobile" value={details.mobile}  onChange={handleOnChange} id="mobile" />
                  </div>
                  <div className="form_data">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={details.password}  onChange={handleOnChange} placeholder='At least 6 char' id="password" />
                  </div>
                  <div className="form_data">
                    <label htmlFor="cpassword">Password Again</label>
                    <input type="password" name="cpassword" value={details.cpassword}  onChange={handleOnChange} placeholder='At least 6 char' id="cpassword" />
                  </div>
                  <button type="submit" className='signin_btn'>Continue</button>
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