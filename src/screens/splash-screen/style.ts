import { DimensionValue, StyleSheet } from "react-native";
import { THEME } from "src/constant/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientBg: {
    position: "absolute",
    width: THEME.sizes.full as DimensionValue,
    height: THEME.sizes.full as DimensionValue,
  },
  contentContainer: {
    position: "absolute",
    bottom: 16,
    width: "100%",
    padding: THEME.spacing["2xl"],
  },
  mainTitle: {
    color: THEME.colors.white,
    fontSize: THEME.fontSizes["4xl"],
    fontWeight: "bold",
    marginBottom: THEME.spacing.lg,
  },
  subTitle: {
    color: THEME.colors.gray[50],
    fontSize: THEME.fontSizes.sm,
    fontWeight: "400",
    marginBottom: THEME.spacing["2xl"],
  },
  loginBtn: {
    padding: THEME.spacing.xl,
    marginBottom: THEME.spacing.xl,
    backgroundColor: THEME.colors.primary[500],
    borderRadius: THEME.spacing.md,
  },
  loginBtnLabel: {
    color: THEME.colors.white,
    fontSize: THEME.fontSizes.sm,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  signupBtn: {
    padding: THEME.spacing.xl,
    borderRadius: THEME.spacing.md,
    borderWidth: 1,
    borderColor: THEME.colors.white,
  },
  signupBtnLabel: {
    color: THEME.colors.white,
    fontSize: THEME.fontSizes.sm,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
