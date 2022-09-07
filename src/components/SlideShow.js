import React from 'react'
import Slider from "react-slick";

const SlideShow = () => {
    const items = [
        {
            src: 'https://images.unsplash.com/photo-1555298305-f64672c34821?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
        },
        {
            src:'https://wallpaperaccess.com/full/4685960.jpg'
        },
        
        {
            src: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29udGFjdCUyMHVzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        }
    ]
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay:true,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
    return (
        <>
            <header className='mb-5'>
            <Slider {...settings} className='slider col-11 mx-auto'> 
            {
                items.map((item)=>(
                    <img src={item.src} />
                ))
            }  
            </Slider>
            </header>
            
            
        </>
    )
}

export default SlideShow