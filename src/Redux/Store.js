import { configureStore } from '@reduxjs/toolkit'
import narrativeReducer from "./NarrativeSlice"
import picsReducer from "./PicsSlice"
import p3Reducer from "./P3Slice"

export default configureStore({
  reducer: {
    narrative: narrativeReducer,
    pics: picsReducer,
    p3: p3Reducer
  },
});