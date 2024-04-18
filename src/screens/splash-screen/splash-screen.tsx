import React from "react";
import { Image, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { IMAGES } from "src/constant/images";
import { THEME } from "src/constant/theme";
import { styles } from "./style";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image source={IMAGES.SplashScreenBg} resizeMode="contain" />
      <LinearGradient
        style={styles.gradientBg}
        colors={[THEME.colors.transparent, THEME.colors.black]}
      >
        <Text>test</Text>
      </LinearGradient>
    </View>
  );
}
