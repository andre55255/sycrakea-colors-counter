import { View } from "react-native";
import CircleButton from "../circle-button/CircleButton";

interface AuxProps {
  color: string;
  value: number;
}

export default function BorderCircleButton({ color, value }: AuxProps) {
  return (
    <View
      style={{
        backgroundColor: color,
        width: 48,
        borderColor: "#000",
        borderRadius: 10,
        paddingHorizontal: 10
      }}
    >
      <CircleButton color="#fff" value={value} />
    </View>
  );
}
