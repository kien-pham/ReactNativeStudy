import React from "react";
import { StyleSheet, View } from "react-native";
import AvatarContentBox from "src/components/avatar-content-box/avatar-content-box";
import ActionButton from "src/components/button/button";
import ContentBox from "src/components/content-box/content-box";
import DateTimeBox from "src/components/date-time-box/date-time-box";
import TitleWithSub from "src/components/title-with-sub/title-with-sub";
import { IMAGES } from "src/constant/images";
import { THEME } from "src/constant/theme";

export default function SessionsContent() {
  return (
    <View>
      <View style={styles.bottomSpace}>
        {/* featured item */}
        <ContentBox
          title={
            <AvatarContentBox
              avatarSource={IMAGES.UserAvatar2}
              avatarSize={THEME.sizes.xl}
            >
              <TitleWithSub
                title="Sahana V"
                subTitle="Msc in Clinical Psychology"
              />
            </AvatarContentBox>
          }
          content={
            <DateTimeBox
              date="12th May 2024"
              time="7:30 PM - 8:30 PM"
              isBorderTop
            />
          }
          actionBtn={
            <View style={styles.btnsGroup}>
              <ActionButton label="Reschedule" />
              <ActionButton label="Join Now" isTransparent />
            </View>
          }
          textColor={THEME.colors.purple[700]}
          bgColor={THEME.colors.primary[30]}
          bgImgColor={THEME.colors.primary[600]}
        />
      </View>

      {/* normal items */}
      <View style={styles.bottomSpace}>
        <ContentBox
          title={
            <AvatarContentBox
              avatarSource={IMAGES.UserAvatar3}
              avatarSize={THEME.sizes.xl}
            >
              <TitleWithSub
                title="Sahana V"
                subTitle="Msc in Clinical Psychology"
              />
            </AvatarContentBox>
          }
          content={
            <DateTimeBox
              date="12th May 2024"
              time="7:30 PM - 8:30 PM"
              isBorderTop
            />
          }
          actionBtn={
            <View style={styles.btnsGroup}>
              <ActionButton label="Re-book" />
              <ActionButton label="View Profile" isTransparent />
            </View>
          }
          textColor={THEME.colors.purple[700]}
          bgColor={THEME.colors.gray[40]}
        />
      </View>

      <View style={styles.bottomSpace}>
        <ContentBox
          title={
            <AvatarContentBox
              avatarSource={IMAGES.UserAvatar4}
              avatarSize={THEME.sizes.xl}
            >
              <TitleWithSub
                title="Sahana V"
                subTitle="Msc in Clinical Psychology"
              />
            </AvatarContentBox>
          }
          content={
            <DateTimeBox
              date="12th May 2024"
              time="7:30 PM - 8:30 PM"
              isBorderTop
            />
          }
          actionBtn={
            <View style={styles.btnsGroup}>
              <ActionButton label="Re-book" />
              <ActionButton label="View Profile" isTransparent />
            </View>
          }
          textColor={THEME.colors.purple[700]}
          bgColor={THEME.colors.gray[40]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.white,
  },
  boxWrapper: {
    padding: THEME.spacing.xl,
  },

  time: {
    fontSize: THEME.fontSizes.sm,
    color: THEME.colors.purple[700],
    marginTop: THEME.spacing.lg,
    lineHeight: THEME.fontSizes.lg,
    fontWeight: "bold",
  },
  heading: {
    color: THEME.colors.purple[700],
    fontWeight: "bold",
    fontSize: THEME.fontSizes.lg,
  },
  btnsGroup: {
    flexDirection: "row",
    gap: THEME.spacing.lg,
    justifyContent: "space-between",
    marginTop: THEME.spacing.lg,
  },

  topSpace: {
    marginTop: THEME.spacing.xl,
  },
  bottomSpace: {
    marginBottom: THEME.spacing.xl,
  },
  rightSpace: {
    marginRight: THEME.spacing.xl,
  },
});
