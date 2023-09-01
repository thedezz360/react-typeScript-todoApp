// function App (): JSX.Element {
import { Todos } from './componentes/Todos'
import { useState } from 'react'

const mockTodos = [
  {
    id: '1',
    title: 'todo 1',
    completed: false
  },
  {
    id: '2',
    title: 'todo 2',
    completed: false
  },
  {
    id: '3',
    title: 'todo 3',
    completed: false
  }
]

const App: React.FC = () => {
  const [todos, setTodos] = useState(mockTodos)
  return (
    <>
     <Todos todos={todos} />
    </>
  )
}

export default App
