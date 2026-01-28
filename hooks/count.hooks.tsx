import { View, Text } from "react-native";
import React, { useState } from "react";

export default function CountHook() {
  const [count, setCount] = useState<number>(0);
  console.log(count);
  return {
    count,
    increment: () => setCount((prevCount) => prevCount + 1),
    decrement: () => setCount((prevCount) => prevCount - 1),
    reset: () => setCount(0),
  };
}
