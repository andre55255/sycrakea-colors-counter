import { View } from "react-native";
import { styles } from "./HomeScreen.style";
import ContainerResult from "../../components/container-result/ContainerResult";
import HomeMain from "../../components/home-main/HomeMain";
import HomeButtonReset from "../../components/home-button-reset/HomeButtonReset";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <ContainerResult color="#fff" />
        <HomeMain />
        <HomeButtonReset />
    </View>
  )
}
