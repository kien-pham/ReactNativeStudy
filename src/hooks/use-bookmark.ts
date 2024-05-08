import { useEffect, useState } from "react";
import storage from "src/storage/storage";
import { RecipeBookmarkItem } from "src/types/recipe";
import { StorageKey } from "src/types/storage";

export enum SaveBookMarkStatus {
  Success = "success",
  Error = "error",
  Duplicate = "duplicate",
  Removed = "removed",
}

export const useBookmark = () => {
  const [bookmarkData, setBookmarkData] = useState<RecipeBookmarkItem[]>([]);

  useEffect(() => {
    const fetchBookmarkData = async () => {
      const data = await getBookmark();
      setBookmarkData(data);
    };

    fetchBookmarkData();
  }, []);

  const getBookmark = async () => {
    try {
      const data = await storage.load<RecipeBookmarkItem[]>({
        key: StorageKey.Bookmark,
      });
      return data;
    } catch (err) {
      return [];
    }
  };

  const saveBookmark = async (recipeBookmarkItem: RecipeBookmarkItem) => {
    const currentBookmarkData = await getBookmark();

    // make sure we don't have duplicate bookmark
    // if we have duplicate, we will remove it
    const isNewItemExist = await isBookmarked(recipeBookmarkItem.idMeal);
    if (isNewItemExist) {
      const isRemoveItem = await removeBookmark(recipeBookmarkItem.idMeal);
      if (isRemoveItem === SaveBookMarkStatus.Error) {
        return SaveBookMarkStatus.Duplicate;
      }
      return SaveBookMarkStatus.Removed;
    }

    // save new bookmark
    const newBookmarkData = [recipeBookmarkItem, ...currentBookmarkData];
    try {
      await storage.save({
        key: StorageKey.Bookmark,
        data: newBookmarkData,
        expires: 1000 * 3600,
      });
      return SaveBookMarkStatus.Success;
    } catch {
      return SaveBookMarkStatus.Error;
    }
  };

  const removeBookmark = async (recipeId: string) => {
    const currentBookmarkData = await getBookmark();
    const updatedBookmarkData = currentBookmarkData.filter(
      (item) => item.idMeal !== recipeId
    );

    try {
      await storage.save({
        key: StorageKey.Bookmark,
        data: updatedBookmarkData,
        expires: 1000 * 3600,
      });
      setBookmarkData(updatedBookmarkData);
      return SaveBookMarkStatus.Removed;
    } catch {
      return SaveBookMarkStatus.Error;
    }
  };

  const isBookmarked = async (mealId: string) => {
    try {
      const bookmarkData = await getBookmark();
      return bookmarkData.some((item) => item.idMeal === mealId);
    } catch {
      return false;
    }
  };

  return {
    getBookmark,
    saveBookmark,
    removeBookmark,
    isBookmarked,
    bookmarkData,
  };
};
