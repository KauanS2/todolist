import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 64,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
    alignItems: "center",
    gap: 10,
    backgroundColor: "#333333",
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 8,
  },
  text: {
    color: "#F2F2F2",
  },
  textUnder: {
    color: "#808080",
    textDecorationLine: "line-through",
  },
  buttonDelete: {},
  buttonCheck: {},
});
