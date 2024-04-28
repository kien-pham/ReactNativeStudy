import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { Recipe } from "src/types/recipe";
import { BlurView } from "expo-blur";
import { ICONS } from "src/constant/icons";
import { IMAGES } from "src/constant/images";

export default function DetailHeader({ recipeData }: { recipeData: Recipe }) {
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: recipeData.strMealThumb }}
          resizeMode="cover"
          style={styles.image}
        />
      </View>

      <View style={styles.headerContentWrapper}>
        <View style={styles.headerNavigatorWrapper}>
          <TouchableOpacity>
            <BlurView intensity={40} style={styles.blurBackIconWrapper}>
              <View style={styles.headerBackIcon}>
                <Image
                  source={ICONS.BackIcon}
                  style={styles.headerBackIconImg}
                />
              </View>
            </BlurView>
          </TouchableOpacity>

          <Image
            source={ICONS.BookmarkIcon}
            style={styles.headerBookmarkIconImg}
          />
        </View>

        <BlurView intensity={70} style={styles.blurContentWrapper}>
          <View style={styles.createBySection}>
            <Image source={IMAGES.UserAvatar} style={styles.userAvatar} />
            <View>
              <Text style={styles.creatorTitle}>Recipe by</Text>
              <Text style={styles.creatorName}>Kien Pham</Text>
            </View>
          </View>

          <View style={styles.nextIconWrapper}>
            <Image source={ICONS.NextIcon} style={styles.nextIconImg} />
          </View>
        </BlurView>
      </View>
    </View>
  );
}
