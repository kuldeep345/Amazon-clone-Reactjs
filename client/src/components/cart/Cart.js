import { Divider } from '@mui/material'
import { useParams } from 'react-router-dom'
import './cart.css'
import {useGetProductQuery} from '../../features/api/crudApi'

const Cart = () => {

    const {id} = useParams()
    const { data: product, isFetching, isSuccess } = useGetProductQuery(id)
    console.log(product)

  return (
    <div className='cart_section'>
    { product && product != null &&  <div className="cart_container">
                <div className='left_cart'>
                    <img src={product.url}  alt=""/>
                    <div className="cart_btn">
                        <button className='cart_btn1'>Add to Cart</button>
                        <button className='cart_btn2'>Buy Now</button>
                    </div>
                </div>
                <div className="right_cart">
                    <h3>{product.title.shortTitle}</h3>
                    <h4>{product.title.longTitle}</h4>
                    <Divider/>
                    <p className='mrp'>M.R.P. : ₹{product.price.mrp}</p>
                    <p>{product.tagline} : <span style={{color:"#B12704"}}>₹{product.price.cost}</span></p>
                    <p>You save : <span style={{color:"#B12704"}}>₹{product.price.mrp - product.price.cost} ({product.price.discount})</span></p>
                    <div className='discount_box'>
                        <h5>Discount: <span style={{color:'#111'}}>{product.discount}</span></h5>
                        <h4>Free Delivery :<span style={{color:"#111",fontWeight:600}}>Oct 8 - 21</span> Details</h4>
                        <p>Fastest delivery: <span style={{color:"#111",fontWeight:600}}>Tomorrow 11AM</span></p>
                    </div>
                    <p className="description">About the Iteam : <span style={{ color:"#56599" , fontSize:14, fontWeight:500 , letterSpacing:"0.4" }}>{product.description}</span></p>
                </div>
            </div>}
    </div>
  )
}

export default Cart