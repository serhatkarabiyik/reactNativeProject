import React from "react";
import { Platform, StyleSheet, View } from "react-native";

const StatusBarBackground = ({}) => {
  return <View style={styles.statusBarBackground}></View>;
};

const styles = StyleSheet.create({
  statusBarBackground: {
    height: Platform.OS === "ios" ? 60 : 0, //this is just to test if the platform is iOS to give it a height of 18, else, no height (Android apps have their own status bar)
    backgroundColor: "white",
  },
});

export default StatusBarBackground;
