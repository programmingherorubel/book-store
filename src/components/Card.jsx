import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../featchers/cart/cartSlice';
import { toast } from 'react-toastify';
import HomePagination from './HomePagination';

const Card = ({singleBook}) => {
   const  {name,author,img,review,category,price} = singleBook || {}
   const dispatch = useDispatch()
   const {products}= useSelector(state => state.products)
   

   const addToCart = (data)=>{     
        dispatch(addProduct(data))  
        toast.success('Book added Successfull', {
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
    return (
        <>
        <div className='animate__animated animate__backInUp animate__delay-2s mb-28 p-4 w-[300px] h-[300px]'>
        <img src={singleBook.img} className='w-60 h-[250px]' alt="" />
        <h3 className='text-xl text-center'>{singleBook.name}</h3>
        <h2 className='text-lg'>{singleBook.author}</h2>
        <div className='flex justify-between px-2'>
            <h4>Price: ${singleBook.price}</h4>
            <h4>Category: {singleBook.category}</h4>
        </div>
        {/* <h4>Category: {Array(singleBook.review).fill().map(item => item)}</h4> */}
        <button onClick={()=>addToCart(singleBook)} className='bg-gradient-to-r w-full bg-zinc-300 border-2  px-2 py-1 hover:bg-white transition-all text-black font-medium rounded'>Add To Cart</button>
        </div>
            
        </>
    );
};

export default Card;