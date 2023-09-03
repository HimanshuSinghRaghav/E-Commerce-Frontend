import { createSlice } from "@reduxjs/toolkit";

const data = {
    name:'',
    description:'',
    price:'',
    stock:'',
    imageUrl:'',
    category:'',
    subcategorie:'',
    metadata:{
        hw:{},
        size:'xs'
    }
}
const AddProductDataSlice = createSlice({
    name:"productadd",
    initialState: data,
    reducers: {
        setProductImage:(state, action) => {
            state.imageUrl = action.payload
            console.log("set" , state)
            return state
        },
        setProductDetails:(state , action)=> {
            state.name = action.payload.name
            state.description = action.payload.description
            state.price = action.payload.price
            state.stock = action.payload.stock
            state.category = action.payload.category
            state.subcategorie = action.payload.subcategorie
        },
        setHW:(state , action)=> {
            state.metadata.hw = action.payload
        },
        setSize:(state , action)=>{
            state.metadata.size = action.payload.size
        },
        resetProductData: (state) => {
            // Reset the state to its initial values
            return { ...data };
          } 
    }
})

console.log(AddProductDataSlice)

export default AddProductDataSlice.reducer

export const {setProductImage , setProductDetails , setHW , setSize ,resetProductData} = AddProductDataSlice.actions