import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Pressable
                style={styles.btn}
                onPress={() => navigation.navigate('TodoList')}>
                <Text style={styles.text}>To-do List</Text>
            </Pressable>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7EDE2',
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 2,
        backgroundColor: '#F28482',
    },
    text: {
        color: 'white'
    }
});

export default HomeScreen;