import { ClipboardText, Trash } from 'phosphor-react'
import { ChangeEvent, useState } from 'react';
import style from './styles.module.scss'

interface TaskListPros {
  tasks: [{
    id: string;
    task: string;
  }];
  onDeleteTask: (task: string) => void;
}

export function TaskList({ tasks, onDeleteTask }: TaskListPros) {

  const [isChecked, setIsChecked] = useState<string[]>([])
  let checkedList: string[] = [...isChecked];

  console.log(tasks.length);

  function handleDeleteTask(taskId: string) {
    onDeleteTask(taskId)
    checkedList.splice(isChecked.indexOf(taskId), 1);
    setIsChecked(checkedList);
  }

  function createListOfCompleted(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      checkedList = [...isChecked, e.target.value];
    } else {
      checkedList.splice(isChecked.indexOf(e.target.value), 1);
    }
    setIsChecked(checkedList);
  }

  return (
    <div className={style.container}>
      <header className={style.info}>
        <div>
          <strong>Created Tasks</strong>
          <span>{tasks.length}</span>
        </div>
        <div>
          <strong>Completed</strong>
          <span>{isChecked.length} de {tasks.length}</span>
        </div>
      </header>
      {tasks.length ?
        tasks.map(task =>
          <div className={style.task} key={task.id}>
            <label htmlFor={task.id}>
              <input type="checkbox"
                id={task.id}
                name={task.task}
                value={task.id}
                onChange={createListOfCompleted} />
              <span>{task.task}</span>
            </label>
            <button onClick={() => handleDeleteTask(task.id)}>
              <Trash size={24} />
            </button>
          </div>
        )
        :
        <div className={style.emptyTask}>
          <ClipboardText size={56} weight="light" />
          <p>Non hai ancora compiti registrate</p>
          <p>Crea compiti e organizza le tue cose da fare</p>
        </div>
      }

    </div>
  )
}