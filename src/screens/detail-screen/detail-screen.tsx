import { useRoute } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { useGetRecipeByIdQuery } from "src/services/recipe-api/recipe-api";
import { DetailScreenRouteProp } from "src/types/navigation";
import { styles } from "./style";
import DetailHeader from "./detail-header";

export default function DetailScreen() {
  const { params } = useRoute<DetailScreenRouteProp>();
  const { data, isLoading } = useGetRecipeByIdQuery(params.recipeId);
  const recipeData = data?.meals[0];

  if (recipeData)
    return (
      <View style={styles.container}>
        <DetailHeader recipeData={recipeData} />

        <View style={styles.contentWrapper}>
          <Text>Detail section</Text>
        </View>
      </View>
    );
}
