import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import ReactWOW from 'react-wow'

const BannerSlider = () => {
  const [slider,setSlider]=useState([])
    let settings = {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
        infinite: true,
        pauseOnHover:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  useEffect(()=>{
    fetch('slider.json')
    .then(res => res.json())
    .then(data => setSlider(data))
  },[])
  

    return (
        <div className="slider animate__animated animate__backInUp">
            <Slider {...settings}>
            {
                slider.map(slide => {
                    return <div key={slide.length} className='container mx-auto'>
                    <div className='flex flex-col justify-center align-middle h-[500px] text-center'>
                         <h3 className='text-lg font-bold text-red-700 animate__animated animate__backInUp'>{slide.shortTitle}</h3>
                         <h1 className='text-4xl md:font-bold sm:font-medium font-medium animate__animated animate__backInUp animate__delay-1s text-white mt-4'>{slide.title}</h1>
                         <p className='animate__animated animate__backInUp animate__delay-2s text-slate-400 mt-4'>{slide.description}</p>
                         <div className='animate__animated animate__backInUp animate__delay-3s mt-4'><button className='bg-gradient-to-r bg-transparent border-2  px-2 py-1 hover:bg-white transition-all text-white font-medium rounded'>Order Now</button></div>
                    </div>
                </div>
                })
            }
            </Slider>
        </div>
    );
};

export default BannerSlider;