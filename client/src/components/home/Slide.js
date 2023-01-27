import { Divider } from '@mui/material'
import React from 'react'
import Carousel from 'react-multi-carousel'
import { products } from './productdata'
import { Navlink } from 'react-router-dom'
import './slide.css'

const Slide = ({title}) => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        }
      }

  return (
    <div className='products_section'>
        <div className="products_deal">
            <h3>{title}</h3>
            <button className='view_btn'>View All</button>
        </div>
        <Divider/>
        <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={true}
        showDots={false}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        >
            {
              products.map((item , i)=>{
                return (
                  <div key={i} className='products_items'>
                    <div className="product_img">
                        <img src={item.url} alt="productitem"/>
                    </div>
                    <p className='products_name'>{item.title.shortTitle}</p>
                    <p className='products_offer'>{item.discount}</p>
                    <p className='products_explore'>{item.tagline}</p>
                  </div>
                )
              })
            }
        </Carousel>
    </div>
  )
}

export default Slide
