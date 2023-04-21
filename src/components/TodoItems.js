import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

function TodoItems({ todos, onDeleteTodo, onToggleTodo }) {

    // Separa os itens completos e incompletos em duas listas
    const completedTodos = todos.filter((todo) => todo.completed);
    const incompleteTodos = todos.filter((todo) => !todo.completed);

    return (
        <View style={styles.main}>
            <View style={styles.tasks}>
                {/* Renderiza as tasks adicionadas e não concluídas */}
                <Text style={styles.subtitle}>Tasks:</Text>
                {incompleteTodos.map((todo) => (
                    <TouchableOpacity
                        key={todo.id}
                        onPress={() => onToggleTodo(todo.id)}
                        onLongPress={() => onDeleteTodo(todo.id)}
                    >
                        <View style={styles.todo}>
                            <Text style={styles.newTask}>{todo.text}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.tasks}>
                {/* Renderiza as tasks concluídas */}
                <Text style={styles.subtitle}>Done:</Text>
                {completedTodos.map((todo) => (
                    <TouchableOpacity
                        key={todo.id}
                        onPress={() => onToggleTodo(todo.id)}
                        onLongPress={() => onDeleteTodo(todo.id)}
                    >
                        <View style={styles.todo}>
                            <Text style={styles.completedTask}>{todo.text}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        alignSelf: 'center',
        width: 250
    },
    title: {
        fontSize: 32,
        color: '#F28482',
        paddingTop: 22,
        textAlign: 'center'
    },
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
        paddingHorizontal: 10,
        fontSize: 18
    },
    btn: {
        backgroundColor: '#F6BD60',
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },

    subtitle: {
        fontSize: 22,
        color: '#84A59D',
        paddingTop: 18,
    },
    newTask: {
        backgroundColor: '#F5CAC3',
        fontSize: 18,
        color: '#353535',
        padding: 5,
        marginTop: 13
        
    },
    completedTask: {
        fontSize: 18,
        color: '#353535',
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 2,
        padding: 5,
        marginTop: 13,
        textDecorationLine: 'line-through'
    }

});

export default TodoItems;
