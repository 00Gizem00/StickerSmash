import { Text, View, StyleSheet } from "react-native";
import { Link,Stack } from "expo-router";


export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: "Ooops! Not Found" }} />
            <View style={styles.container}>
                <Link href="/" style={styles.button}>
                    Go back to Home screen
                </Link>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#25292e',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#ffffff',
    },
    button: {
      fontSize: 20,
      color: '#ffffff',
      textDecorationLine: 'underline',
      marginTop: 20,
    },
});