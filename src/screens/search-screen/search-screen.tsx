import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AppScreen } from "src/constant/screen";
import { THEME } from "src/constant/theme";
import { useSearchRecipesQuery } from "src/services/recipe-api/recipe-api";
import { ScreenNavProps, SearchScreenRouteProp } from "src/types/navigation";
import { getRandomNumber } from "src/utils/helper";

export default function SearchScreen() {
  const { navigate } = useNavigation<ScreenNavProps>();
  const { params } = useRoute<SearchScreenRouteProp>();
  const searchQuery = params?.searchQuery;

  const { data } = useSearchRecipesQuery(searchQuery);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {!searchQuery || searchQuery === "" ? (
          <View style={styles.wrapper}>
            <Text>I'm too lazy to style this screen 🥲</Text>
          </View>
        ) : (
          <View>
            <View style={styles.wrapper}>
              <View>
                <Text style={styles.title}>Search Result</Text>
                <Text style={styles.subTitle}>
                  You search {searchQuery}, we found {data?.meals?.length || 0}{" "}
                  recipes for you
                </Text>
              </View>
            </View>

            <ScrollView
              showsVerticalScrollIndicator={false}
              style={styles.wrapper}
            >
              {data?.meals ? (
                data.meals.map((item) => (
                  <TouchableOpacity
                    onPress={() =>
                      navigate(AppScreen.DetailScreen, {
                        recipeId: item.idMeal,
                      })
                    }
                    key={item.idMeal}
                    style={styles.itemWrapper}
                  >
                    <Image
                      source={{ uri: item.strMealThumb }}
                      style={styles.imageThumb}
                    />
                    <View style={styles.contentWrapper}>
                      <Text style={styles.title}>{item.strMeal}</Text>
                      <Text style={styles.subtitle}>
                        {getRandomNumber(20, 50)} mins | {getRandomNumber(1, 4)}{" "}
                        Serving
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))
              ) : (
                <Text>No recipe found</Text>
              )}
            </ScrollView>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    padding: THEME.spacing.xl,
  },
  itemWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: THEME.spacing.xl,
    marginVertical: THEME.spacing.lg,
  },
  imageThumb: {
    width: 60,
    height: 60,
    borderRadius: 8,
    objectFit: "cover",
    borderWidth: 1,
    borderColor: THEME.colors.gray[100],
  },
  contentWrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "500",
    fontSize: THEME.fontSizes.lg,
    marginBottom: THEME.spacing.lg2,
  },
  subtitle: {
    fontSize: THEME.fontSizes.xs,
    color: THEME.colors.gray[500],
  },
  subTitle: {
    color: THEME.colors.gray["500"],
    fontSize: THEME.fontSizes.sm,
  },
});
