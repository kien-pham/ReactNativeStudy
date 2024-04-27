import { StyleSheet } from "react-native";
import { THEME } from "src/constant/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: THEME.spacing.xl,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  title: {
    color: THEME.colors.gray["600"],
    fontSize: THEME.fontSizes.xl,
    fontWeight: "500",
    marginBottom: THEME.spacing.md,
  },
  subTitle: {
    color: THEME.colors.gray["500"],
    fontSize: THEME.fontSizes.sm,
  },
});
