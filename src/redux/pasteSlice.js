import { createSlice } from "@reduxjs/toolkit";
import {toast} from "react-hot-toast";

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

export const pasteSlice = createSlice({
  name: "paste",
  initialState,

  reducers: {
    addToPastes: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);

      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste created successfully", {
        position: "top-right",
      });
    },

    updateToPastes: (state, action) => {
      const paste = action.payload;
      console.log("paste in reducer:" + paste.title);
      const index = state.pastes.findIndex((item) => item._id === paste._id);
      console.log(index);
      if (index >= 0) {
        state.pastes[index] = paste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste updated successfully", {
          position: "top-right",
        });
      }
    },

    resetAllPastes: (state, action) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
    },

    removeFromPastes: (state, action) => {
      console.log("inside del reduce");
      const pasteId = action.payload;

      console.log("pasteId : " + pasteId);

      const index = state.pastes.findIndex((item) => item._id === pasteId);

      console.log(index);

      if (index >= 0) {
        state.pastes.splice(index, 1);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste deleted successfully", {
          position: "top-right",
        });
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, removeFromPastes, resetAllPastes } =
  pasteSlice.actions;

export default pasteSlice.reducer;
