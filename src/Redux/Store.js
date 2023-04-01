import { configureStore } from '@reduxjs/toolkit'
import narrativeReducer from "./NarrativeSlice"
import picsReducer from "./PicsSlice"
import p3Reducer from "./P3Slice"
import p1Reducer from "./P1Slice"
import p2Reducer from "./P2Slice"

export default configureStore({
  reducer: {
    narrative: narrativeReducer,
    pics: picsReducer,
    p3: p3Reducer,
    p1: p1Reducer,
    p2: p2Reducer
  },
});