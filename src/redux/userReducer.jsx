import {createSlice} from '@reduxjs/toolkit'

export const userReducer = createSlice({
    name:"student",
    initialState:{
        ts_name:[
            {
                student1:"Ajith",
                student2:"Vasanth",
                student3:"Dinesh",
                student4:"Sanjai",
                teacher:"Raj"
            },
            {
                student1:"Balaji",
                student2:"Anbu",
                student3:"Magi",
                student4:"Naveen",
                teacher:"Vijay"
            },
        ]
    },
    reducers:{
        addTS:(state,action)=>{
            state.ts_name.push(action.payload)
        },
        editTS:(state,action)=>{
            state.ts_name.splice(action.payload.index,1,action.payload.data)
        },
        deleteTS:(state,action)=>{
            state.ts_name.splice(action.payload.index,1)
        }
    }
})

export const {addTS,editTS,deleteTS} = userReducer.actions
export default userReducer.reducer