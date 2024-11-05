import { Button, Pressable, Text, View } from "react-native";
import { useState } from "react";
export default function Index() {

  const [newColor, setNewColor] = useState('white')
  
  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
    setNewColor(randomColor);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pressable style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: newColor}} onPress={generateRandomColor}>
        <Text>Hello There!</Text>
      </Pressable>
    </View>
  );
}
