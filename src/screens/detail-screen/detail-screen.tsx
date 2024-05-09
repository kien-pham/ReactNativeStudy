import { useRoute } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { useGetRecipeByIdQuery } from "src/services/recipe-api/recipe-api";
import { DetailScreenRouteProp } from "src/types/navigation";
import { styles } from "./style";
import DetailHeader from "./detail-header";
import DetailContent from "./detail-content";
import { useFormatRecipeData } from "src/hooks/use-format-recipe-data";
import { RecipeBookmarkItem } from "src/types/recipe";
import { SaveBookMarkStatus, useBookmark } from "src/hooks/use-bookmark";
import Toast from "react-native-toast-message";

export default function DetailScreen() {
  const { params } = useRoute<DetailScreenRouteProp>();
  const { saveBookmark } = useBookmark();
  const { data } = useGetRecipeByIdQuery(params.recipeId);
  const recipeData = useFormatRecipeData(data);

  const handleBookmark = (bookmarkItem: RecipeBookmarkItem) => {
    saveBookmark(bookmarkItem)
      .then((status) => {
        if (status === SaveBookMarkStatus.Success) {
          Toast.show({
            type: "success",
            text1: "Bookmark saved!",
            text2: "This recipe has been saved to your bookmark",
          });
        }

        if (status === SaveBookMarkStatus.Removed) {
          Toast.show({
            type: "error",
            text1: "Bookmark removed!",
            text2: "This recipe has been removed from your bookmark",
          });
        }

        if (status === SaveBookMarkStatus.Duplicate) {
          Toast.show({
            type: "error",
            text1: "Duplicated!",
            text2: "Your bookmark already exist",
          });
        }
      })
      .catch(() => {
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Failed!",
          text2: "Your bookmark failed to save. Please try again",
        });
      });
  };

  if (recipeData)
    return (
      <View style={styles.container}>
        <DetailHeader recipeData={recipeData} onBookmark={handleBookmark} />
        <DetailContent recipeData={recipeData} />
      </View>
    );
}
