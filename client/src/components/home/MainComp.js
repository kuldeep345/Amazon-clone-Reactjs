import React, { useEffect } from 'react'
import Banner from './Banner'
import './home.css'
import Slide from './Slide'
import { useGetProductsQuery } from '../../features/api/crudApi'
import { setProducts } from '../../features/slices/productSlice'
import { useDispatch } from 'react-redux'
import { CircularProgress } from '@mui/material'

const MainComp = () => {

    const dispatch = useDispatch()
    const {data: products, isLoading, isSuccess, isError,error} = useGetProductsQuery()

    useEffect(() => {
        dispatch(setProducts(products))
    }, [isSuccess])
    
   console.log(products)
         

  return isLoading ? <div className='circle'>
    <CircularProgress/>
    <h2>Loading...</h2>
  </div> : 
    <><div className="home_section">
        <div className="banner_part">
            <Banner/>
        </div>
        <div className="slide_part">
            <div className="left_slide">
                <Slide title="Deal of The Day" products={products}/>
            </div>  
            <div className="right_slide">
                 <h4>Festive latest launches</h4>
                 <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg" alt="rightimg" />
                 <a href="#">see More</a>
            </div>
        </div>
        <Slide title="Today's Deal" products={products}/>
            <div className="center_img">
                <img src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" alt=""/>
            </div>
        <Slide title="Best Seller" products={products}/>
        <Slide title="Upto 80% off" products={products}/>
       
    </div></>

}

export default MainComp
