import { createSlice } from "@reduxjs/toolkit";

const TokenSlice = createSlice({
    name:"authToken",
    initialState: '',
    reducers: {
        setAuthToken(state, action) {
            state = action.payload
            console.log(state)
            localStorage.setItem("AUTH_TOKEN" , state)
            return state
        },
       
    }
})

console.log(TokenSlice)

export default TokenSlice.reducer

export const {setAuthToken} = TokenSlice.actions