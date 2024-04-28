import { StyleSheet } from "react-native";
import { THEME } from "src/constant/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.white,
    display: "flex",
  },
  headerWrapper: {
    flex: 2,
  },
  contentWrapper: {
    flex: 3,
    backgroundColor: "red",
  },
  headerNavigatorWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  blurBackIconWrapper: {
    width: 28,
    height: 28,
    borderRadius: 20,
    overflow: "hidden",
  },
  headerBackIcon: {
    width: 28,
    height: 28,
    borderRadius: 20,
    borderColor: THEME.colors.white,
    borderWidth: 1,
    padding: THEME.spacing.xs,
    justifyContent: "center",
    alignItems: "center",
  },
  headerBackIconImg: {
    width: 10,
    height: 10,
    tintColor: THEME.colors.white,
  },
  headerBookmarkIconImg: {
    tintColor: THEME.colors.white,
    width: 24,
    height: 24,
  },
  headerContentWrapper: {
    flex: 1,
    marginTop: THEME.spacing["2xl"],
    padding: THEME.spacing["2xl"],
    flexDirection: "column",
    justifyContent: "space-between",
  },
  blurContentWrapper: {
    padding: THEME.spacing.xl,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
    overflow: "hidden",
  },
  createBySection: {
    flexDirection: "row",
    alignItems: "center",
    gap: THEME.spacing.xl,
  },
  imageWrapper: {
    height: "100%",
    width: "100%",
    position: "absolute",
    backgroundColor: "black",
  },
  image: {
    opacity: 0.9,
    height: "100%",
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  creatorTitle: {
    color: THEME.colors.gray[800],
    marginBottom: THEME.spacing.sm,
  },
  creatorName: {
    color: THEME.colors.white,
    fontWeight: "600",
  },
  nextIconWrapper: {
    padding: THEME.spacing.lg,
    borderColor: THEME.colors.gray[200],
    borderRadius: 4,
    borderWidth: 1,
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  nextIconImg: {
    width: 16,
    height: 16,
    tintColor: THEME.colors.gray[200],
  },
});
