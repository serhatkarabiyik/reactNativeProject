import { StyleSheet, Text, View } from "react-native";

export function checkInput(value, type) {
  if (value.length < 1) {
    return true;
  }

  if (type === "email") {
    return value.includes("@");
  } else if (type === "password") {
    if (value.length >= 6) {
      return true;
    } else {
      return false;
    }
  }
}

export const toastConfig = {
  success: (props) => (
    <View style={[styles.container, styles.successContainer]}>
      <Text style={styles.title}>{props.text1}</Text>
      <Text>{props.text2}</Text>
    </View>
  ),
  error: (props) => (
    <View style={[styles.container, styles.errorContainer]}>
      <Text style={styles.title}>{props.text1}</Text>
      <Text>{props.text2}</Text>
    </View>
  ),
};

const styles = StyleSheet.create({
  container: {
    height: "max-content",
    padding: 15,
    backgroundColor: "white",
    borderRadius: 8,
    zIndex: 100000,
    width: "100%",
  },
  successContainer: {
    borderLeftWidth: 6,
    borderLeftColor: "green",
    borderWidth: 1,
    borderColor: "green",
  },
  errorContainer: {
    borderLeftWidth: 6,
    borderLeftColor: "red",
    borderWidth: 1,
    borderColor: "red",
  },
  title: {
    fontWeight: "bold",
  },
});
