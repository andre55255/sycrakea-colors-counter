import { View } from "react-native";
import { styles } from "./HomeMain.style";
import HomeMainItem from "../home-main-item/HomeMainItem";

export default function HomeMain() {
  return (
    <View style={styles.container}>
        <HomeMainItem color="#ffffff" value={0} />
        <HomeMainItem color="#ff0000" value={3} />
        <HomeMainItem color="#0000ff" value={2} />
        <HomeMainItem color="#fff200" value={1} />
    </View>
  )
}
