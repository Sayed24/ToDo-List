import styled from 'styled-components';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import TodoList from './Components/TodoList';
import { useState } from 'react';

function App() {
  const [sideBarToggle, setSideBarToggle] = useState(true);
  const todoList = [
    {
      name: 'Personal',
      color: '#fd76a1',
      icon: 'fas fa-user',
    },
    {
      name: 'work',
      color: '#70c4be',
      icon: 'fas fa-briefcase',
    },
    {
      name: 'Profit with React',
      color: '#ab6ddf',
      icon: 'fas fa-file-code',
    },
  ]

  return (
    <Wrapper>
      <Header
        sideBarToggle={sideBarToggle}
        setSideBarToggle={setSideBarToggle}
      />
      <Main>
        <Sidebar sideBarToggle={sideBarToggle} todoList={todoList} />
        <MainContent style={{ width: `calc(100vw - (${sideBarToggle ? '300px' : '70px'}))` }}>
          <TodoContent>
            <Title>Dashboard</Title>
            <Greeting>Good Morning, SayedRahim</Greeting>
            {todoList.map(category => (
              <TodoList
                key={category.name}
                name={category.name}
                color={category.color}
                icon={category.icon}
              />
            ))}
          </TodoContent>
        </MainContent>
      </Main>
    </Wrapper>
  )
}

export default App;



const Wrapper = styled.div`
  background-color: #18181f;
  min-height: 100vh;
  min-width: 100vw;
  color: #eee;
`

const Main = styled.div`
  display: flex;
`

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  transition: 0.3s;
`

const TodoContent = styled.div`
  max-width: 700px;
  width: 100%;
`

const Title = styled.div`
  margin: 50px 0;
  font-size:30px;
  font-weight: 700;
`

const Greeting = styled.div`
  margin-bottom: 20px;
  font-size: 36px;
  font-weight: 800;
`


