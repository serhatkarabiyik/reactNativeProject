import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  containerForm: {
    display: "flex",
    alignItems: "center",
    paddingTop: 120,
    marginHorizontal: 10,
    zIndex: 0,
  },
  longCard: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    width: 300,
    height: 50,
    padding: 3,
    marginVertical: 5,
  },
});
