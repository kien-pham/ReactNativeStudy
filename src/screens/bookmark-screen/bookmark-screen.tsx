import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AppScreen } from "src/constant/screen";
import { THEME } from "src/constant/theme";
import { useAppDispatch, useAppSelector } from "src/services/redux/redux-store";
import { getAllBookmarks } from "src/services/redux/thunks/bookmark-thunks";
import { ScreenNavProps } from "src/types/navigation";
import { getRandomNumber } from "src/utils/helper";

export default function BookmarkScreen() {
  const { navigate } = useNavigation<ScreenNavProps>();
  const dispath = useAppDispatch();
  const { isRefesh, bookmarksList } = useAppSelector(
    (state) => state.bookMarkReducer
  );

  const handleGetAllBookmarks = () => {
    dispath(getAllBookmarks());
  };

  useEffect(() => {
    handleGetAllBookmarks();
  }, [bookmarksList.length]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.title}>Bookmarks</Text>
          <Text style={styles.subTitle}>All recipes you have been saved</Text>
        </View>
      </View>

      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={isRefesh}
            onRefresh={handleGetAllBookmarks}
          />
        }
      >
        <View style={styles.wrapper}>
          {bookmarksList.length === 0 ? (
            <Text>You have not bookmarked any recipe yet</Text>
          ) : (
            bookmarksList.map((item) => (
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
          )}
        </View>
      </ScrollView>
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
