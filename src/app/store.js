import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducers from "../featchers/cart/cartSlice";

const store = configureStore({
    reducer:{
        products:cartSliceReducers,
        
    },
    // middleware:getDefaultMiddleware => getDefaultMiddleware().concat(cartSliceReducers.middleware)
})


export default store