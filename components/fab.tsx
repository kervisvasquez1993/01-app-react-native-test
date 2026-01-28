import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";

import { styles } from "../styles/global.styles";
interface Props {
  labels: string;
  onPress: () => void;
  onLongPress?: () => void;
  position?: "left" | "right";
}
export default function FAB({ labels, onPress, onLongPress, position }: Props) {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={({ pressed }) => [
        styles.floatingBotton,
        position === "left" ? styles.left : styles.right,
        pressed ? { opacity: 0.5 } : { opacity: 1 },
      ]}
    >
      <Text style={{ fontSize: 20, color: "white" }}>{labels}</Text>
    </Pressable>
  );
}
