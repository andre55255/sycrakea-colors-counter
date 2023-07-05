import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 50
  },
  resetButton: {
    backgroundColor: "red",
    width: "100%",
    height: 45,
    padding: 10,
    borderRadius: 5,
  },
  resetButtonTxt: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    textAlign: "center",
  }
});
