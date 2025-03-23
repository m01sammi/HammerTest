import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  objects: [],
  draggedItem: null,
  selectedObject: null,
};

const plannerSlice = createSlice({
  name: "planner",
  initialState,
  reducers: {
    setObjects: (state, action) => {
        state.objects = action.payload; 
      },
    setDraggedItem: (state, action) => {
      state.draggedItem = action.payload;
    },
    setSelectedObject: (state, action) => {
      state.selectedObject = action.payload;
    },
  },
});

export const {
    setObjects,
    setDraggedItem,
    setSelectedObject,
} = plannerSlice.actions;

export default plannerSlice.reducer;
