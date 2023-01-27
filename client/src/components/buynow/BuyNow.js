import './buynow.css'
import { Divider } from '@mui/material'
import Option from './Option'
import Subtotal from './Subtotal'
import Right from './Right'

const BuyNow = () => {
  return (
    <div className='buynow_section'>
        <div className='buynow_container'>
            <div className="left_buy">
                <h1>Shopping Cart</h1>
                <p>Select all items</p>
                <span className="leftbuyprice">Price</span>
                <Divider/>
                <div className='item_containert'>
                    <img src='https://n3.sdlcdn.com/imgs/k/f/3/AQFIT-Pink-Smart-Watch-SDL498394570-1-f975d.jpg' alt=""/>
                    <div className="item_details">
                        <h3>AQFIT W12 Smartwatch IP68 Water Resistant</h3>
                        <h3>Smart Watches</h3>
                        <h3>₹4049.00</h3>
                        <p>Usually dispatched in 8 days.</p>
                        <p>Eligible for FREE Shipping</p>
                        <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="logo" />
                        <Option/>
                    </div>
                    <h3 className='item_price'>₹4049.00</h3>
                </div>
                <Divider/>
                <Subtotal/>
            </div>
            <Right/>
        </div>
    </div>
  )
}

export default BuyNow