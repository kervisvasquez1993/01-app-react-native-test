import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import CountHook from "./hooks/count.hooks";
import FAB from "./components/fab";
import { styles } from "./styles/global.styles";

export default function App() {
  const { count, increment, reset, decrement } = CountHook();
  return (
    <View style={[styles.container]}>
      <Text style={styles.textHuge}>{count}</Text>
      <FAB
        labels="+1"
        onPress={() => increment()}
        onLongPress={() => reset()}
        position="right"
      />
      <FAB
        labels="-1"
        onPress={() => decrement()}
        onLongPress={() => reset()}
        position="left"
      />
      <StatusBar style="dark" />
    </View>
  );
}
