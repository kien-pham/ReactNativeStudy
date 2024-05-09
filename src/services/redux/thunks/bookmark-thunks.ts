import { createAsyncThunk } from "@reduxjs/toolkit";
import storage from "src/storage/storage";
import { RecipeBookmarkItem } from "src/types/recipe";
import { StorageKey } from "src/types/storage";

export const getAllBookmarks = createAsyncThunk("bookmark/getAll", async () => {
  const bookmarksData = await storage.load<RecipeBookmarkItem[]>({
    key: StorageKey.Bookmark,
  });
  return bookmarksData;
});
