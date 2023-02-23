import { createSlice } from "@reduxjs/toolkit";



const creater: any = createSlice(
    {
        name: "sneakers",
        initialState: {
            value: []
        },

        reducers: {
            myfun: (state: any, actions) => {
                state.value = actions.payload
                // console.log("first",actions)
            },

            deleteCart:(state:any,action)=>{
                state.value = []
            }
        }
    }
)

export const { myfun, deleteCart } = creater.actions

export default creater.reducer