import React from "react";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import { IMAGES } from "src/constant/images";
import { THEME } from "src/constant/theme";

export default function UserAvatar({
  isRounded = true,
  isOutlined = false,
  source = IMAGES.UserAvatar,
  size,
}: {
  isRounded?: boolean;
  isOutlined?: boolean;
  source?: ImageSourcePropType;
  size: number;
}) {
  const styles = StyleSheet.create({
    userAvatar: {
      width: size,
      height: size,
      borderRadius: isRounded ? size / 2 : 0,
    },
    outlineBorder: {
      borderWidth: 4,
      borderColor: THEME.colors.primary[450],
    },
  });

  return (
    <View>
      <Image
        source={source}
        style={[styles.userAvatar, isOutlined && styles.outlineBorder]}
        resizeMode="cover"
      />
    </View>
  );
}
