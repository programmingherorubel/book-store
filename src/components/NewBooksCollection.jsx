import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../featchers/cart/cartSlice';
import { toast } from 'react-toastify';


const NewBooksCollection = () => {
    const [productss,setProducts]=useState([])
    const {products} = useSelector(state => state.products)
    const dispatch = useDispatch()

      const addToCart = (data)=>{
        dispatch(addProduct(data))
        toast.success('book added successfull', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }
      
          
          
    
    let settings = {
      infinite:true,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows:false,
      dots: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      centerPadding: '60px',
      responsive: [
        {
          breakpoint: 1250,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      };
    useEffect(()=>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setProducts(data.slice(0,10).reverse()))
    },[])
    
    return (
        <div className='container mx-auto py-10 pt-10'>
            <h2 className='text-4xl  font-bold underline-offset-1 '>New Arrivals</h2> 
            <Slider {...settings}>
                {
                    productss.map(singleBook => {
                        return <div className=' mt-10 p-4 w-[300px] h-[300px]'>
                        <img src={singleBook.img} className='w-60 h-[250px]' alt="" />
                        <h3 className='text-2xl'>{singleBook.name.charAt(0).toUpperCase()
                        + singleBook.name.slice(1)}</h3>
                        <h2 className='text-lg'>{singleBook.author}</h2>
                        <div className='flex justify-between px-2'>
                            <h4>Price: ${singleBook.price}</h4>
                            <h4>Category: {singleBook.category}</h4>
                        </div>
                        {/* <h4>Category: {Array(singleBook.review).fill().map(item => item)}</h4> */}
                        <button onClick={()=>addToCart(singleBook)} className='bg-gradient-to-r w-full bg-zinc-300 border-2  px-2 py-1 hover:bg-white transition-all text-black font-medium rounded'>Add To Cart</button>
                        </div>
                    })
                }
            </Slider>
        </div>
    );
};

export default NewBooksCollection;