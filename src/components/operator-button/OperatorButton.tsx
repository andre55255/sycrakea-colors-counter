import Icon from "react-native-vector-icons/Feather";
import { HomeMainItemApp } from "../../types/values";

interface AuxProps {
  iconName: string;
  onPressFunc: (id: string, valuesApp: HomeMainItemApp[]) => void;
}

export default function OperatorButton({ iconName, onPressFunc }: AuxProps) {
  return <Icon 
    onPress={onPressFunc}
    name={iconName}
    size={38}
    color="#F9F5F6" />;
}
