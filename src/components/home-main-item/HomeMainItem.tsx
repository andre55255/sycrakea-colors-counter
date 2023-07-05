import { View } from "react-native";
import { styles } from "./HomeMainItem.style";
import BorderCircleButton from "../border-circle-button/BorderCircleButton";
import OperatorButton from "../operator-button/OperatorButton";

interface AuxProps {
  color: string;
  value: number;
  id: string;
  onPressPlus: (id: string) => void;
  onPressMinus: (id: string) => void;
}

export default function HomeMainItem({
  color,
  value,
  id,
  onPressMinus,
  onPressPlus,
}: AuxProps) {
  return (
    <View style={styles.container}>
      <View style={styles.circleBorder}>
        <BorderCircleButton color={color} value={value} />
      </View>
      <View style={styles.icons}>
        <OperatorButton onPressFunc={() => onPressPlus(id)} iconName="plus-circle" />
        <OperatorButton onPressFunc={() => onPressMinus(id)} iconName="minus-circle" />
      </View>
    </View>
  );
}
