import React, {useState} from 'react';
import FormToDo from '../formToDo/FormToDo.jsx';
import ListTodo from '../ListOfTodos/ListTodo.jsx';

const TodoList = () => {
    const initialValue = [
        {
            id: 1,
            name: "Ver la grabacion de la clase",
            completed: false
        },
        {
            id: 2,
            name: "Hacer almuerzo",
            completed: true
        },
        {
            id: 3,
            name: "Enviar el workshop",
            completed: false
        }
    ]
    const [todo, setTodo] = useState(initialValue)
    return (
        <div>
            <FormToDo/>
            <ListTodo list={todo}/>
        </div>
    )
}

export default TodoList;