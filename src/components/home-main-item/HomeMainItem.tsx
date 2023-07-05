import { View } from "react-native";
import { styles } from "./HomeMainItem.style";
import BorderCircleButton from "../border-circle-button/BorderCircleButton";
import OperatorButton from "../operator-button/OperatorButton";


interface AuxProps {
  color: string;
  value: number;
}


export default function HomeMainItem({ color, value }: AuxProps) {
  return (
    <View style={styles.container}>
      <View style={styles.circleBorder}>
        <BorderCircleButton color={color} value={value} />
      </View>
      <View style={styles.icons}>
        <OperatorButton iconName="plus-circle" />
        <OperatorButton iconName="minus-circle" />
      </View>
    </View>
  );
}
