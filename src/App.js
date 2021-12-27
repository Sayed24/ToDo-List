import styled from 'styled-components';
import './App.css';
import Header from './Components/Header';
import TodoList from './Components/TodoList';

function App() {
  return (
    <Wrapper>
      <Header />
      <Main>
        <MainContent style={{ width: '100vw' }}>
          <TodoContent>
            <Title>Dashboard</Title>
            <Greeting>Good Morning, SayedRahim Sadat</Greeting>
            <TodoList />
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


