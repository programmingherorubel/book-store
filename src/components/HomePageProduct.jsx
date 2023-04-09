import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../featchers/cart/cartSlice';
import { toast } from 'react-toastify';
import HomePagination from './HomePagination';

const HomePageProduct = () => {
    const [featchersProduct,setFeatchersProduct] = useState([])
    const dispatch = useDispatch()
    const {products} = useSelector(state => state.products)
    const [currentPage,setCurrentPage]= useState(1)
    const [postPerPage,setPostPerPage]= useState(8)
    
      
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
      

    useEffect(()=>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setFeatchersProduct(data.slice(0,17)))
    },[])

    const lastPostIndex = currentPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage
    let currentData = featchersProduct.slice(firstPostIndex,lastPostIndex)
    return (
        <div className='container mx-auto'>
            <h3 className='text-3xl text-left'>Our Regular Books</h3>
            <div className='grid text-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 '>
                {
                    currentData.map(featcher => <div className=' mb-28 p-4 w-[300px] h-[300px]'>
                    <img src={featcher.img} className='w-60 h-[250px]' alt="" />
                    <h3 className='text-2xl'>{featcher.name.charAt(0).toUpperCase()
                    + featcher.name.slice(1).slice(0,22)}</h3>
                    <h2 className='text-lg'>{featcher.author}</h2>
                    <div className='flex justify-between px-2'>
                        <h4>Price: ${featcher.price}</h4>
                        <h4>Category: {featcher.category}</h4>
                    </div>
                    {/* <h4>Category: {Array(singleBook.review).fill().map(item => item)}</h4> */}
                    <button onClick={()=>addToCart(featcher)}  className='bg-gradient-to-r w-full bg-zinc-300 border-2  px-2 py-1 hover:bg-white transition-all text-black font-medium rounded'>Add To Cart</button>
                    </div>)
                }
            </div>
            <HomePagination postPerPage={postPerPage} totalpost={featchersProduct.length} setCurrentPage={setCurrentPage}/>
        </div>
    );
};

export default HomePageProduct;