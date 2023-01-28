import './buynow.css'
import { Divider } from '@mui/material'
import Option from './Option'
import Subtotal from './Subtotal'
import Right from './Right'
import { useEffect, useState } from 'react'

const BuyNow = () => {

    const [cartdata , setCartdata] = useState([])

    const getAllProducts = async()=>{
        const res = await fetch("/user/cartDetails" , {
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:"include"
        });

        const data = await res.json()
        
        if(res.status !== 201){
            console.log("error")
        }
        else{
            setCartdata(data)
        }
    }

    useEffect(() => {
      getAllProducts();
    }, [])
    

  return (
    <>
  {cartdata?.carts ?  <div className='buynow_section'>
        <div className='buynow_container'>
            <div className="left_buy">
                <h1>Shopping Cart</h1>
                <p>Select all items</p>
                <span className="leftbuyprice">Price</span>
                <Divider/>
                {cartdata?.carts.map((item,i)=>(
                    <div key={i} className='item_containert'>
                    <img src={item.url} alt=""/>
                    <div className="item_details">
                        <h3>{item.title.longTitle}</h3>
                        <h3>{item.title.shortTitle}</h3>
                        <h3>₹4049.00</h3>
                        <p>Usually dispatched in 8 days.</p>
                        <p>Eligible for FREE Shipping</p>
                        <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="logo" />
                        <Option deletedata={item._id} get={getAllProducts}/>
                    </div>
                    <h3 className='item_price'>₹{item.price.cost}.00</h3>
                </div>
                ))}
                <Divider/>
                <Subtotal cartItems={cartdata.carts} />
            </div>
            <Right cartItems={cartdata.carts} />
        </div>
    </div> : ""}
    </>
  )
}

export default BuyNow