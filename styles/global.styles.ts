import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textHuge: {
    fontSize: 120,
    fontWeight: "100",
  },
  floatingBotton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#65558f",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    elevation: 3,
    shadowRadius: 4,
  },
  left: {
    left: 20,
    right: undefined,
  },
  right: {
    left: undefined,
    right: 20,
  },
});
