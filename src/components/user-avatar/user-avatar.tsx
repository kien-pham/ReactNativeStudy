import React from "react";
import { Image, ImageSourcePropType, StyleSheet } from "react-native";
import { IMAGES } from "src/constant/images";

export default function UserAvatar({
  isRounded = true,
  source = IMAGES.UserAvatar,
  size,
}: {
  isRounded?: boolean;
  source?: ImageSourcePropType;
  size: number;
}) {
  const styles = StyleSheet.create({
    userAvatar: {
      width: size,
      height: size,
      borderRadius: isRounded ? size / 2 : 0,
    },
  });

  return <Image source={source} style={styles.userAvatar} resizeMode="cover" />;
}
