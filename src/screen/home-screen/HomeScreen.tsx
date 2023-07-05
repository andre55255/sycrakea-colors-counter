import { useState } from "react";
import { Alert, View } from "react-native";
import { styles } from "./HomeScreen.style";
import ContainerResult from "../../components/container-result/ContainerResult";
import HomeMain from "../../components/home-main/HomeMain";
import HomeButtonReset from "../../components/home-button-reset/HomeButtonReset";
import { HomeMainItemApp } from "../../types/values";
import { defaultColorResult, getValuesHomeMainItemApp } from "../../helpers/initialValues";

export default function HomeScreen() {
  const [valuesApp, setValuesApp] = useState<HomeMainItemApp[]>(
    getValuesHomeMainItemApp
  );
  const [resultColor, setResultColor] = useState<string>(defaultColorResult);

  const onPressPlus = (id: string) => {
    try {
      const index = valuesApp.findIndex((item) => item.id == id);
      valuesApp[index].value++;

      setValuesApp([...valuesApp]);

      calculateResult(valuesApp);
    } catch (err) {
      Alert.alert(
        "Erro",
        `Falha inesperada ao executar ação de somar valor: ${err}`
      );
    }
  };

  const onPressMinus = (id: string) => {
    try {
      const index = valuesApp.findIndex((item) => item.id == id);
      if (valuesApp[index].value == 0) return;

      valuesApp[index].value--;

      setValuesApp([...valuesApp]);
      
      calculateResult(valuesApp);
    } catch (err) {
      Alert.alert(
        "Erro",
        `Falha inesperada ao executar ação de diminuir valor: ${err}`
      );
    }
  };

  const calculateResult = (values: HomeMainItemApp[]) => {
    try {
      const valuesClone = [...values];
      valuesClone.sort((a, b) => b.value - a.value);

      const filterAllZero = valuesClone.find((item) => item.value > 0);
      if (!filterAllZero)
        setResultColor(defaultColorResult);
      else
        setResultColor(valuesClone[0].color);
    } catch (err) {
      Alert.alert(
        "Erro",
        `Falha inesperada ao calcular e setar novo resultado: ${err}`
      );
    }
  };

  const onPressReset = () => {
    try {
      const valuesAppReseted: HomeMainItemApp[] = 
        valuesApp.map((item) => {
          return {
            id: item.id,
            color: item.color,
            value: 0
          }
        });

      setResultColor(defaultColorResult);
      setValuesApp([...valuesAppReseted]);
    } catch (err) {
      Alert.alert(
        "Erro",
        `Falha inesperada ao executar reset de valores: ${err}`
      );
    }
  }

  return (
    <View style={styles.container}>
      <ContainerResult color={resultColor} />
      <HomeMain
        items={valuesApp}
        onPressPlus={onPressPlus}
        onPressMinus={onPressMinus}
      />
      <HomeButtonReset
       onPressReset={onPressReset} 
      />
    </View>
  );
}
