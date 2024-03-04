import React from "react";
import { View, StyleSheet, Text } from "react-native";
import StatusBarBackground from "../components/statusBarBg";

const Profil = ({}) => {
  return (
    <>
      <View>
        <StatusBarBackground />
      </View>
      <View style={styles.container}>
        <Text>Page Profil user</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  button: {
    backgroundColor: "red",
    width: 100,
    height: 100,
  },
});

export default Profil;
