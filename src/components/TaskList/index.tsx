import { ClipboardText, Trash } from 'phosphor-react'
import style from './styles.module.scss'

export function TaskList({ content }) {

  console.log(content.length);
  return (
    <div className={style.container}>
      <header className={style.info}>
        <div>
          <strong>Created Tasks</strong>
          <span>0</span>
        </div>
        <div>
          <strong>Completed</strong>
          <span>5</span>
        </div>
      </header>
      {content.length ?
        content.map(task =>
          <div className={style.task}>
            <label htmlFor={task}>

              <input type="checkbox" id={task} name={task} />
              <span>{task}</span>

            </label>
            <Trash size={24} />
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