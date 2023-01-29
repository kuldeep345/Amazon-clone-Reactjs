import React from 'react'
import { useDispatch} from 'react-redux'
import { toast } from 'react-toastify'
import { decreaseCart } from '../../features/slices/userSlice'

const Option = ({deletedata, get}) => {
  const dispatch = useDispatch()
  const removedata = async()=>{
    const resdata = await fetch(`/user/remove/${deletedata}`,{
      method:"DELETE",
      headers:{
        Accept:"application/json",
        "Content-type":"application/json"
      },
      credentials:"include"
    })

    const data = await resdata.json()
    console.log(data)

    if(resdata.status === 400 || !data){
      console.log("error")
    }
    else{
      dispatch(decreaseCart(deletedata))
      toast.success('Product has been deleted from cart', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      get()
    }
  }

  return (
    <div className='add_remove_select'>
        <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <p style={{cursor:"pointer"}} onClick={()=>removedata(deletedata)}>Delete </p><span>|</span>
        <p className='forremovemedia'>Save or Later</p> <span>|</span> 
        <p className='forremovemedia'>See More like this</p>
    </div>
  )
}

export default Option