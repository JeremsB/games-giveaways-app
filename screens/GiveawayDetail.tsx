import * as React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

export function GiveawayDetail({ route }) {
    const { id } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <Text>id {id}</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    card: {
        backgroundColor: "#f9c2ff",
        marginVertical: 8,
        marginHorizontal: 18,
        borderRadius: 8,
    },
});
