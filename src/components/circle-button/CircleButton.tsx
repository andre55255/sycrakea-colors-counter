import { Text, View } from "react-native";
import { styles } from "./CircleButton.style";

interface AuxProps {
  color: string;
  value?: number;
}

export default function CircleButton({ color, value }: AuxProps): JSX.Element {
  return (
    <View
      style={{
        backgroundColor: color,
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#000",
        borderWidth: 1
      }}
    >
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}
