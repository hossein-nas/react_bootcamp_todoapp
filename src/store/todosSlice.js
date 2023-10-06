import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        todoText: '',
        nextId: 0
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: state.nextId++,
                text: action.payload.text,
                completed: false
            })
        },

        toggleTodo(state, action) {
            const foundTodo = state.todos.find(todo => todo.id === action.payload.id)
            if (foundTodo) {
                foundTodo.completed = !foundTodo.completed
            }
        },

        editTodo(state, action) {
            const foundTodo = state.todos.find(todo => todo.id === action.payload.id)
            if (foundTodo) {
                foundTodo.text = action.payload.text
            }
        },

        deleteTodo(state, action) {
            const foundTodoIndex = state.todos.findIndex(todo => todo.id === action.payload.id)
            if (foundTodoIndex != -1) {
                state.todos.splice(foundTodoIndex, 1)
            }
        },

        setTodoText(state, action) {
            state.todoText = action.payload.text
        }
    }
})


export const { addTodo, toggleTodo, editTodo, deleteTodo, setTodoText } = todosSlice.actions

export default todosSlice.reducer
