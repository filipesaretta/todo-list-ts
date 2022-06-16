import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import logo from '../../assets/logo.svg'
import { TaskList } from '../TaskList';
import style from './styles.module.scss'

export function Header() {
  const [addTask, setAddTask] = useState([]);
  const [newTask, setNewTask] = useState('');

  function handleAddTask(e: FormEvent) {
    e.preventDefault();
    if (newTask) {
      setAddTask([...addTask, newTask])
    }
    setNewTask('');
  }

  function handleNewTask(e: ChangeEvent<HTMLInputElement>) {
    setNewTask(e.target.value);
  }



  return (
    <>
      <div className={style.container}>
        <header className={style.header}>
          <img src={logo} alt="Todo with a rocket" />
        </header>
        <form className={style.form} onSubmit={handleAddTask}>
          <input type="text" value={newTask} onChange={handleNewTask} placeholder='Add your todo, and do it!' />
          <button disabled={newTask ? false : true} type="submit">Create <PlusCircle size={20} weight='bold' /></button>
        </form>
      </div>
      <TaskList content={addTask} />
    </>
  )
}