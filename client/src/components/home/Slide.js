import { Divider } from '@mui/material'
import React from 'react'
import Carousel from 'react-multi-carousel'
import { NavLink } from 'react-router-dom'
import './slide.css'

const Slide = ({title,products}) => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
        }
      }

  return (
    <div className='products_section'>
        <div className="products_deal">
            <h3>{title}</h3>
            <button className='view_btn'>View All</button>
        </div>
        <Divider/>
       {products?.length >0 && <Carousel
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
              products?.map((item , i)=>{
                return (
                  <NavLink to={`/products/${item._id}`} key={i}><div className='products_items'>
                    <div className="product_img">
                        <img src={item.url} alt="productitem"/>
                    </div>
                    <p className='products_name'>{item.title.shortTitle}</p>
                    <p className='products_offer'>{item.discount}</p>
                    <p className='products_explore'>{item.tagline}</p>
                  </div></NavLink>
                )
              })
            }
        </Carousel>}
    </div>
  )
}

export default Slide
