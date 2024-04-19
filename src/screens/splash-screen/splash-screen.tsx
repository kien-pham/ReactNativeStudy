import React from "react";
import { Image, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { IMAGES } from "src/constant/images";
import { THEME } from "src/constant/theme";
import { styles } from "./style";
import ActionButton from "src/components/button/button";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image source={IMAGES.SplashScreenBg} resizeMode="contain" />

      <LinearGradient
        style={styles.gradientBg}
        colors={[THEME.colors.transparent, THEME.colors.black]}
      >
        <View style={styles.contentContainer}>
          <Text
            style={styles.mainTitle}
          >{`Cooking a \nDelicious Food \nEasily`}</Text>
          <Text style={styles.subTitle}>
            Discover more than 1200 food recipes in your hands and cooking it
            easily!
          </Text>

          <ActionButton
            label="Login"
            btnStyle={styles.loginBtn}
            textStyle={styles.loginBtnLabel}
          />
          <ActionButton
            label="Sign up"
            btnStyle={styles.signupBtn}
            textStyle={styles.loginBtnLabel}
          />
        </View>
      </LinearGradient>
    </View>
  );
}
