import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 173,
    backgroundColor: "#0D0D0D",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  content: {
    flex: 1,
    backgroundColor: "#262626",
    padding: 24,
  },
  img: {
    width: 110,
    height: 32,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: -50,
  },
  input: {
    flex: 1,
    backgroundColor: "#333333",
    color: "#FFF",
    height: 54,
    padding: 16,
    borderRadius: 6,
    marginRight: 4,
  },
  button: {
    height: 54,
    width: 52,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    backgroundColor: "#1E6F9F",
  },
  textButton: {
    color: "#FFF",
    fontSize: 20,
  },
  tasksInfo: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
  },
  textCreate: {
    color: "#4EA8DE",
    fontWeight: "bold",
    fontSize: 16,
  },
  info: {
    justifyContent: "center",
    alignContent: "center",
    color: "#FFF",
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: "#808080",
    borderRadius: 9999,
  },
  textConclued: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#8284FA",
  },
});
