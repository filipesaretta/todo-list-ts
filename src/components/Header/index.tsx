import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import logo from '../../assets/logo.svg'
import { TaskList } from '../TaskList';
import style from './styles.module.scss'

import { v4 as uuidv4 } from 'uuid'

interface TasksProps {
  id: string;
  task: string;
}

export function Header() {
  const [tasks, setTasks] = useState<TasksProps[]>([]);
  const [newTask, setNewTask] = useState('');

  function handleAddTask(e: FormEvent) {
    e.preventDefault();
    if (newTask) {
      setTasks([...tasks, { id: uuidv4(), task: newTask }])
    }
    setNewTask('');
  }

  function handleNewTask(e: ChangeEvent<HTMLInputElement>) {
    setNewTask(e.target.value);
  }

  function handleDeleteTask(taskToDelete: string) {
    const newTaskToDelete = tasks.filter(task => task.id !== taskToDelete);
    setTasks(newTaskToDelete);
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
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </>
  )
}