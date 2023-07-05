import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 80,
        paddingVertical: 15,
        marginTop: 10,
        gap: 25,
        borderStyle: "solid",
        borderWidth: 1.5,
        borderColor: "#fff",
        borderRadius: 10
    },
    text: {
        color: "#fff",
        fontSize: 25,
        alignSelf: "center",
    }
});