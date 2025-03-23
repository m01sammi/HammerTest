import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { set } from "lodash";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    selectedUser: null,
    userProfileVisible: false,
    userProfileEdit: false,
    status: "idle",
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    setUserProfileVisible: (state, action) => {
      state.userProfileVisible = action.payload;
    },
    setUserProfileEdit: (state, action) => {
      state.userProfileEdit = action.payload;
    }
  },
});

export const { setUsers, setSelectedUser, setUserProfileVisible, setUserProfileEdit } = usersSlice.actions;

export default usersSlice.reducer;
