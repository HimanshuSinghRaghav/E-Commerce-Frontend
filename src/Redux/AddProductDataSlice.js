import { createSlice } from "@reduxjs/toolkit";

const data = {
    name:'',
    description:'',
    price:'1',
    stock:'',
    imageUrl:'',
    subcategorie:'',
}
const AddProductDataSlice = createSlice({
    name:"productadd",
    initialState: data,
    reducers: {
        setProductImage(state, action) {
            state.imageUrl = action.payload
            console.log("set" , state)
            return state
        },       
    }
})

console.log(AddProductDataSlice)

export default AddProductDataSlice.reducer

export const {setProductImage} = AddProductDataSlice.actions