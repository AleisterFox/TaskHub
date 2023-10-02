import React from 'react';
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const { items: todos, updateItems, loading, error } = useLocalStorage('TASKHUB_V1', []);
    const [modal, setModal] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');
    const [todoValue, setTodoValue] = React.useState('');

    const [openModal, setOpenModal] = React.useState(false);

    //ELIMINAR TODOS
    const deleteTodo = (text) => {
        const itemList = document.querySelectorAll('li');
        const newTodos = todos.filter(todo => todo.text !== text);
        itemList.forEach(todo => {
            let itemLabel = todo.lastChild.previousSibling.htmlFor;
            if (itemLabel === text) {
                todo.style.animation = 'fireworks 1s linear';
            }
        });
        setTimeout(() => {
            updateItems(newTodos);
        }, 910);
    };

    //BUSCAR TODOS
    const searchedTodos = todos.filter(
        (todo) => {
            return todo.text.toLowerCase().includes(searchValue.toLowerCase());
        });

    //CONTAR TODOS
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;


    //COMPLETAR TODOS
    const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        if (newTodos[todoIndex].completed === false) {
            newTodos[todoIndex].completed = true;
        } else {
            newTodos[todoIndex].completed = false;
        }
        updateItems(newTodos);
    };

    //MOSTRAR Y OCULTAR MODAL 
    const showModal = () => {
        let taskModal = document.getElementById('modal');
        taskModal.style.display = 'block';
        setOpenModal(true);
        taskModal.style.animation = 'appearModal 0.5s linear';
        let input = document.querySelector('#task');
        setTimeout(() => {
            input.focus();
        }, 100);
    };

    const closeModal = () => {
        let taskModal = document.getElementById('modal');
        taskModal.style.animation = 'disappearModal 0.5s linear';
        setTimeout(() => {
            setOpenModal(false);
            taskModal.style.display = 'none';
        }, 400);
    }


    //CREAR TODOS
    const addTodo = (task) => {
        let taskModal = document.getElementById('modal');
        if (task === '') {
            // setOpenModal(false);
            alert('Agregue la tarea a realizar')
        } else {
            const newTodo = { text: task, completed: false };
            const newTodos = [...todos];
            newTodos.push(newTodo);
            // newTodos.push({
            //     task,
            //     completed:false
            // }) alternativa de como hacerlo en una linea
            updateItems(newTodos);
            setTodoValue('');
            setOpenModal(false);
            taskModal.style.display = 'none';
        }
        
    };


    return (
        <TodoContext.Provider value = {{
            searchedTodos,
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            completeTodo,
            deleteTodo,
            showModal,
            modal,
            closeModal,
            addTodo,
            todoValue,
            setTodoValue,
            openModal,
            setOpenModal
        }}>
            {children}

        </TodoContext.Provider>
    )

}

export { TodoContext, TodoProvider };