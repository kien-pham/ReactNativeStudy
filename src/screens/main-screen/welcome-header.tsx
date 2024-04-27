import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./style";
import { IMAGES } from "src/constant/images";

export default function WelcomeHeader() {
  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.title}>Hello Kien,</Text>
        <Text style={styles.subTitle}>What do you want to cook today?</Text>
      </View>
      <Image
        source={IMAGES.UserAvatar}
        resizeMode="cover"
        style={styles.avatar}
      />
    </View>
  );
}
