import { Header } from "./components/Header"
import style from './App.module.scss'
import { TaskList } from "./components/TaskList"

function App() {

  return (
    <div className={style.container}>
      <Header />
    </div>
  )
}

export default App
