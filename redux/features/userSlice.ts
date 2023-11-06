import { createSlice } from "@reduxjs/toolkit";

const initialState:any = [
 
];

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    deleteUser: (state, action) => {
      // Deletes a user from the state based on the user ID.
      const userIdToDelete = action.payload; 

      // Use the filter method to remove the user with the specified ID
      state = state.filter((user:any) => user.id !== userIdToDelete);
      return state;
    },
    updateUser: (state, action) => {
      const updatedUser = action.payload; // This should be an object containing the updated user data
      const userIdToUpdate = updatedUser.id;

      // Find the index of the user to update
      const userIndex = state.findIndex((user:any) => user.id === userIdToUpdate);

      if (userIndex !== -1) {
        // If the user is found, update their data
        state[userIndex] = updatedUser;
      }
    },
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;

export const selectUser = (state: any) => {
  return state.user;
};

export default userSlice.reducer;
