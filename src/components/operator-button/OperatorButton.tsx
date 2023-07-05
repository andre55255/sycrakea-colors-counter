import Icon from "react-native-vector-icons/Feather";

interface AuxProps {
  iconName: string;
}

export default function OperatorButton({ iconName }: AuxProps) {
  return <Icon 
    name={iconName}
    size={38}
    color="#F9F5F6" />;
}
