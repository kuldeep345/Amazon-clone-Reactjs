import React from 'react'

const Right = ({cartItems}) => {

  const initialValue = 0;
const sumWithInitial = cartItems.reduce(
  (accumulator, currentValue) => accumulator + currentValue.price.cost,
  initialValue
);

  return (
    <div className='right_buy'>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="rightimg"  />
        <div className='cost_right'>
            <p>Your order is eligible for FREE Delivery</p><br/>
            <span style={{color:"#565959"}}>Select this option at checkout. Details</span>
            <h3>Subtotal ({cartItems.length} items): <span style={{fontWeight:700}}>₹{sumWithInitial}.00</span></h3>
            <button className='rightbuy_btn'>Process to Buy</button>
            <div className="emi">
                Emi available
            </div>
        </div>
    </div>
  )
}

export default Right