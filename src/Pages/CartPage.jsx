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
    
    let TotalPrice = 0
    let quantity = 0
    for(let product of products){
        TotalPrice += product.price
        quantity += product.quantity
    }

   
    
    return (
        <>
          <div className='container m-[100px] mx-auto flex justify-center' >
            <table className="table-auto mx-auto">
            {products.length >0 ? <thead>
                <tr>
                <th className="px-4 py-2">img</th>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Delete</th>
                </tr>
            </thead> : 'Cart Is Empty'}
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
            <div className='container w-[50%] my-[50px]  mx-auto text-center grid-cols-8'>
                <hr />
                <h3 className='text-xl text-right'> Total Product : {products.length}</h3>
                <h3 className='text-xl text-right'> Total Quantity : {quantity}</h3>
                <h3 className='text-2xl text-right'> Total Price : {TotalPrice}</h3>
            </div>
    <Footer/>
    </>         
    );
};

export default CartPage;