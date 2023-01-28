import React from 'react'

const Subtotal = ({cartItems}) => {

const initialValue = 0;
const sumWithInitial = cartItems.reduce(
  (accumulator, currentValue) => accumulator + currentValue.price.cost,
  initialValue
);

  return (
    <div className='sub_item'>
        <h3>Subtotal ({cartItems.length} items): <strong style={{fontWeight:700 , color:"#111"}}>₹{sumWithInitial}.00</strong></h3>
    </div>
  )
}

export default Subtotal