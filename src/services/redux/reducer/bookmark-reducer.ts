import { createSlice } from "@reduxjs/toolkit";
import { RecipeBookmarkItem } from "src/types/recipe";
import { getAllBookmarks } from "../thunks/bookmark-thunks";

type BookmarkState = {
  isRefesh: boolean;
  bookmarksList: RecipeBookmarkItem[];
};

const initialState: BookmarkState = {
  isRefesh: false,
  bookmarksList: [],
};

export const bookmarkSlice = createSlice({
  name: "bookMarkSlice",
  reducers: {},
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllBookmarks.pending, (state, action) => {
      state.isRefesh = true;
    }),
      builder.addCase(getAllBookmarks.fulfilled, (state, action) => {
        state.bookmarksList = action.payload;
        state.isRefesh = false;
      });
  },
});
