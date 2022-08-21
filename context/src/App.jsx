import { useContext, useState } from 'react'
import './App.css'
import Content from './components/Content'
import { actions, useStore } from './store'
import { ThemeContext } from './ThemeContext'

function App() {
  const context = useContext(ThemeContext)
// get global state
  const [state, dispatch] = useStore()
  const { todos, todoInput } = state
 // console.log(todoInput);

  const hanleAddTodo = () => {
    dispatch(actions.addTodo(todoInput))
  }
  console.log(todos);
  return (
      <div className="card">
        <button onClick = {context.toggleTheme}>
          Change Theme
        </button>
        <Content />
        <h3>Global state voi context</h3>

        <input type="text" 
        placeholder='Enter todo here...'
        value={todoInput}
        onChange={e=>{
          dispatch(actions.setTodoInput(e.target.value))
        }}
        />
        <button onClick={hanleAddTodo}>Add</button>
        <ul>
          {todos.map((todo,index) => (
              <li key={index}>
                {todo}
              </li>
          ))}
        
        </ul>
      </div>



  )
}

export default App
