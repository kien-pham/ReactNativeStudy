import React, { ReactNode } from "react";
import { Image, ImageProps, StyleSheet, Text, View } from "react-native";
import { THEME } from "src/constant/theme";

export default function ContentBox({
  title,
  content,
  actionBtn,
  bgImg,
  bgImgColor,
  bgColor = THEME.colors.primary[500],
  isColorBgOnly,
}: {
  title: string;
  content: string;
  actionBtn: ReactNode;
  bgImg?: ImageProps["source"];
  bgImgColor?: string;
  bgColor?: string;
  isColorBgOnly?: boolean;
}) {
  const styles = StyleSheet.create({
    wrapper: {
      padding: THEME.spacing.xl2,
      backgroundColor: bgColor,
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      borderRadius: 8,
      overflow: "hidden",
    },
    mainImg: {
      opacity: isColorBgOnly ? 0 : 0.8,
      tintColor: bgImgColor,
      width: 60,
      height: 60,
    },
    heading: {
      fontSize: THEME.fontSizes["2xl"],
      fontWeight: "bold",
      color: THEME.colors.purple[900],
    },
    content: {
      fontSize: THEME.fontSizes.sm,
      color: THEME.colors.purple[900],
      marginTop: THEME.spacing.lg,
    },
    actBtnWrapper: { marginTop: THEME.spacing.lg2 },
    contentSection: {
      flex: 2,
      paddingRight: THEME.spacing.lg,
    },
    imgSection: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    bgShape: {
      backgroundColor: bgImgColor,
      opacity: 0.2,
      position: "absolute",
      width: 100,
      height: 100,
      borderRadius: 50,
      transform: [{ scaleX: 3 }],
      right: -70,
      bottom: -70,
    },
  });

  return (
    <View style={styles.wrapper}>
      <View style={styles.bgShape} />
      <View style={styles.contentSection}>
        <Text style={styles.heading}>{title}</Text>
        <Text style={styles.content}>{content}</Text>

        <View style={styles.actBtnWrapper}>{actionBtn}</View>
      </View>

      <View style={styles.imgSection}>
        <Image source={bgImg} style={styles.mainImg} />
      </View>
    </View>
  );
}
