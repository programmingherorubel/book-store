import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[]
}

// const productUpDownSlice = createSlice({
//     name:'products',
//     initialState,
//     reducers:{
//         addProduct:(state,action)=>{
//             action.payload.quantity = 1 
//             state.products.push(action.payload)
//         },
        
        
//     }

// })
const productUpDownSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        addProduct:(state,action)=>{
            const existingProduct = state.products.find(product => product.id === action.payload.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                action.payload.quantity = 1;
                state.products.push(action.payload);
            }
        },
        incrementQuantity: (state, action) => {
            const existingProduct = state.products.find(
              (product) => product.id === action.payload
            );
            if (existingProduct) {
              existingProduct.quantity += 1;
            }
          },
          decrementQuantity: (state, action) => {
            const existingProduct = state.products.find(
              (product) => product.id === action.payload
            );
            if (existingProduct) {
              if (existingProduct.quantity > 1) {
                existingProduct.quantity -= 1;
              } else {
                state.products = state.products.filter(
                  (product) => product.id !== existingProduct.id
                );
              }
            }
          },
          deleteProduct: (state, action) => {
            state.products = state.products.filter(
              (product) => product.id !== action.payload
            );
          },
    }
})


export const {addProduct,incrementQuantity,decrementQuantity,deleteProduct} = productUpDownSlice.actions
export default productUpDownSlice.reducer


// const productUpDownSlice = createSlice({
//     name: "products",
//     initialState,
//     reducers: {
//       addProduct: (state, action) => {
//         const existingProduct = state.products.find(
//           (product) => product.id === action.payload.id
//         );
//         if (existingProduct) {
//           existingProduct.quantity += 1;
//         } else {
//           action.payload.quantity = 1;
//           state.products.push(action.payload);
//         }
//       },
      
//     },
//   });