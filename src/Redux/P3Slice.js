
import { createSlice } from "@reduxjs/toolkit";

const getDefaultAns = (n) => {
    const ans = [];
    for(let i = 0; i < n; ++i)
    {
        ans.push({id:i,val:""});
    }
    return ans;
};

const p3Slice = createSlice({
    name: "part3",
    initialState: {
        ans : getDefaultAns(9)
    },
    reducers: {
        setAns: (state, action) => {state.ans[action.payload.id].val = action.payload.val}
    }
});


export const {setAns} = p3Slice.actions;
export default p3Slice.reducer;