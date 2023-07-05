import { Text, View } from "react-native";
import { styles } from "./ContainerResult.style";
import CircleButton from "../circle-button/CircleButton";

interface AuxProps {
    color: string;
}

export default function ContainerResult({ color }: AuxProps) {
  return (
    <View style={styles.container}>
        <CircleButton color={color} />
        <Text style={styles.text}>Resultado</Text>
    </View>
  )
}
