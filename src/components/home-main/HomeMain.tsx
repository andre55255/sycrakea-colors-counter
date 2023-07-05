import { View } from "react-native";
import { styles } from "./HomeMain.style";
import HomeMainItem from "../home-main-item/HomeMainItem";
import { HomeMainItemApp } from "../../types/values";

interface AuxProps {
  items: HomeMainItemApp[];
  onPressPlus: (id: string) => void;
  onPressMinus: (id: string) => void;
}

export default function HomeMain({
  items,
  onPressMinus,
  onPressPlus,
}: AuxProps) {
  return (
    <View style={styles.container}>
      {items.map((item) => {
        return (
          <HomeMainItem
            key={item.id}
            onPressPlus={onPressPlus}
            onPressMinus={onPressMinus}
            color={item.color}
            value={item.value}
            id={item.id}
          />
        );
      })}
    </View>
  );
}
