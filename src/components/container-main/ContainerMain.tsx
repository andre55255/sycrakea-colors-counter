import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { styles } from "./ContainerMain.style";

type AuxProps = {
    children: JSX.Element | JSX.Element[];
}

export default function ContainerMain({ children }: AuxProps): JSX.Element {
    return (
        <SafeAreaView style={styles.container} onLayout={async () => {}}>
            <StatusBar barStyle="dark-content" />
            {children}
        </SafeAreaView>
    );
}