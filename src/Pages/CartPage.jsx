import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {incrementQuantity ,decrementQuantity, deleteProduct } from '../featchers/cart/cartSlice'
import Footer from '../components/Footer';
import { toast } from 'react-toastify';


const CartPage = () => {
    const {products} = useSelector(state => state.products)
    const dispatch = useDispatch()

    const increment = (id)=>{
        
        dispatch(incrementQuantity(id))
    }
    const decrement = (id)=>{
        dispatch(decrementQuantity(id))
    }

    const deleteProducts = (id)=>{
        dispatch(deleteProduct(id))
        toast.success('book Delete Successfull', {
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
          <div className='container mx-auto flex justify-center' >
        <table className="table-auto">
            <thead>
                <tr>
                <th className="px-4 py-2">img</th>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Delete</th>
                </tr>
            </thead>
            {
                products.map(singleProduct => <tbody>
                    <tr>
                        <td className="border px-4 py-2"><img className='w-[50px]' src={singleProduct.img} alt="" /></td>
                        <td className="border px-4 py-2">{singleProduct.name}</td>
                        <td className="border px-4 py-2">
                             <FontAwesomeIcon className='mx-4' onClick={()=> increment(singleProduct.id)}  icon={faPlus}/> 

                        {singleProduct?.quantity} 
                        
                        <FontAwesomeIcon className='mx-4' onClick={()=>decrement(singleProduct.id)} icon={faMinus}/></td>
                        <td className="border px-4 py-2">{singleProduct.price}</td>
                        <td className="border px-4 py-2 text-center"><FontAwesomeIcon onClick={()=>deleteProducts(singleProduct.id)} className='text-red-600' icon={faTrash}/></td>
                    </tr>
                    
                </tbody>)
            }
            </table>
    </div>  
    <Footer/>
    </>         
    );
};

export default CartPage;