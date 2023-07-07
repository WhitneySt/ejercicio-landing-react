import React from 'react'

const ListTodo = ({list}) => {
  return (
    <div>
        <ol>
            {list.map((tarea) => (
                <li key={tarea.id}>
                    <input type="checkbox" checked={tarea.completed}/>
                    <label>{tarea.name}</label>    
                </li>
            ))}
            
        </ol>
    </div>
  )
}

export default ListTodo