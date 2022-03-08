import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const TodoItem = ({ todo, color, baseUrl, getTodos, name }) => {

    const [editedTodo, setEditedTodo] = useState(todo.fields.title);

    useEffect(() => {
        setEditedTodo(todo.fields.title)
    }, [todo])

    const deleteTask = async () => {
        try {
            await fetch(`${baseUrl}/${todo.id}`, {
                method: 'delete',
                headers: {
                    Authorization: 'Bearer keySPPdJVd4xYukz4',
                    'Content-Type': 'application/json'
                },
            })

            getTodos()
        } catch (err) {
            console.log(err)
        }
    }

    const saveTodo = async () => {
        try {
            await fetch(`${baseUrl}/${todo.id}`, {
                method: 'put',
                Headers: {
                    Authorization: 'Bearer keySPPdJVd4xYukz4',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fields: {
                        Title: editedTodo,
                        Completed: todo.fields.completed,
                    },
                }),
            })
            getTodos()
        } catch (error) {
            console.log(error)
        }
    }

    const completeTodo = async () => {
        try {
            await fetch(`${baseUrl}/${todo.id}`, {
                method: 'put',
                Headers: {
                    Authorization: 'Bearer keySPPdJVd4xYukz4',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fields: {
                        Title: todo.fields.title,
                        Completed: !todo.fields.completed,
                    },
                }),
            })
            getTodos()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <TodoListItem>
            <Checkbox className={todo.fields.completed ? 'far fa-check-circle' : 'far fa-circle'} onClick={completeTodo} style={{ color: color }} />
            <input style={{ textDecoration: todo.fields.completed ? 'line-through' : 'none' }} value={editedTodo} onChange={e => setEditedTodo(e.target.value)} />
            {todo.fields.title !== editedTodo && (<SaveTodo className='fas fa-check' onClick={saveTodo} />)}
            <DeleteTodo className='fas fa-trash-alt' onClick={deleteTask} />
        </TodoListItem>

    )
}

export default TodoItem;



const TodoListItem = styled.div`
height: 50px;
display: flex;
align-items: center;
padding: 15px 20px;
transition: 0.3s;

input {
    flex: 1;
    font-size: 22px;
    outline: none;
    background: none;
    border: none;
    color: #eee;
}
`
const Checkbox = styled.i`
    font-size: 20px;
    margin-right:10px;
    cursor: pointer;
`

const DeleteTodo = styled.i`
color: #ff1605;
    padding: 10px 16px;
    margin-left: 14px;
    border-radius: 4px;
    margin-right: -12px;

    &:hover {
        background-color: #7e2601;
        transition: 0.3s;
        cursor: pointer;
    }
`

const SaveTodo = styled.i`
    padding: 10px 16px;
    border-radius: 4px;
    margin-right: -12px;
    color: #42c732;

    &:hover {
        background-color: #2b6127;
        transition: 0.3s;
        cursor: pointer;
    }
`
