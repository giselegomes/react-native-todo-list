import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TodoForm from './TodoForm';
import TodoItems from './TodoItems';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const handleAddTodo = (text) => {
        const newTodo = { id: Date.now(), text, completed: false };

        // verifica se o campo está vazio
        if (newTodo.text === '') {
            return;
        }
        setTodos([...todos, newTodo]);
    };

    const handleDeleteTodo = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };

    const handleToggleTodo = (id) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            } else {
                return todo;
            }
        });
        setTodos(newTodos);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>To-do List</Text>
            <TodoForm onAddTodo={handleAddTodo} />
            <TodoItems
                todos={todos}
                onDeleteTodo={handleDeleteTodo}
                onToggleTodo={handleToggleTodo}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7EDE2',
        flex: 1
    },
    title: {
        fontSize: 32,
        color: '#F28482',
        paddingTop: 22,
        textAlign: 'center'
    }
});

export default TodoList;