import React from 'react';
import './style.css';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import { TodoName } from '../TodoName';
import { CreateTodo } from '../CreateTodo'
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodosEmpty } from '../TodosEmpty';
import { TodoContext } from '../TodoContext';


function AppUI() {
    const {
        searchedTodos,
        loading,
        error,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <>
            <TodoName />

            <TodoCounter />

            <TodoSearch />

            <TodoList>
                {loading && <TodosLoading />}
                {error && <TodosError />}
                {(!loading && searchedTodos.length === 0) && <TodosEmpty />}
                {searchedTodos.map(todo => (
                    <TodoItem key={todo.id} id={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(todo.text)} onDelete={() => deleteTodo(todo.text)} />
                ))}
            </TodoList>

            <CreateTodoButton />

            {/* <CreateTodo /> */}

            {/* <TodoContext.Consumer>
                {({ todoValue,
                    addTodo
                }) => (
                    <CreateTodo onClickAdd={() => addTodo(todoValue)} />
                )}
            </TodoContext.Consumer> */}

            
            {openModal && (
                <CreateTodo />
            )}

        </>
    );
}

export { AppUI };


// loading,
// error,
// completedTodos,
// totalTodos,
// searchValue,
// setSearchValue,
// searchedTodos,
// completeTodo,
// deleteTodo,
// openModal,
// modal,
// closeModal,
// addTodo,
// todoValue,
// setTodoValue