import React from 'react'
import styled from 'styled-components';

const TodoItem = () => {
    return (
        <TodoListItem>
            <Checkbox className='far fa-circle' />
            <input />
            <SaveTodo className='fas fa-check' />
            <DeleteTodo className='fas fa-trash-alt' />
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
