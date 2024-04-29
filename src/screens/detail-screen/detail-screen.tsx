import { useRoute } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { useGetRecipeByIdQuery } from "src/services/recipe-api/recipe-api";
import { DetailScreenRouteProp } from "src/types/navigation";
import { styles } from "./style";
import DetailHeader from "./detail-header";
import DetailContent from "./detail-content";
import { useFormatRecipeData } from "src/hooks/use-format-recipe-data";

export default function DetailScreen() {
  const { params } = useRoute<DetailScreenRouteProp>();
  const { data } = useGetRecipeByIdQuery(params.recipeId);
  const recipeData = useFormatRecipeData(data);

  if (recipeData)
    return (
      <View style={styles.container}>
        <DetailHeader recipeData={recipeData} />
        <DetailContent recipeData={recipeData} />
      </View>
    );
}
