import { useContext } from 'react'
import { useState } from 'react'
import './App.css'
import Content from './components/Content'
import { ThemeContext } from './ThemeContext'

function App() {
  const [count, setCount] = useState(0)
  const context = useContext(ThemeContext)
  return (
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick = {context.toggleTheme}>
          Change Theme
        </button>
        <Content />
      </div>
  )
}

export default App
