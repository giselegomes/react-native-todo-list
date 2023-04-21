import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

function TodoForm({ onAddTodo }) {
    const [text, setText] = useState('');

    const handleSubmit = () => {

        onAddTodo(text);
        setText('');
    };

    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="New task:"
                value={text}
                onChangeText={setText}
            />
            <TouchableOpacity style={styles.btn}
                onPress={handleSubmit}>
                <Text>add</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        padding: 20,
        columnGap: 5,
        justifyContent: 'center',
        alignContent: 'center'
    },
    input: {
        borderColor: '#CCCCCC',
        borderWidth: 1,
        width: 200,
        height: 50,
        borderRadius: 10,
        paddingHorizontal: 10
    },
    btn: {
        backgroundColor: '#F6BD60',
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
});

export default TodoForm;