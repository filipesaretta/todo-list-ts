import { PlusCircle } from 'phosphor-react'
import logo from '../../assets/logo.svg'
import style from './styles.module.scss'

export function Header() {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <img src={logo} alt="Todo with a rocket" />
      </header>
      <form className={style.form}>
        <input type="text" name="" id="" placeholder='Add your todo, and do it!' />
        <button type="submit">Create <PlusCircle size={20} weight='bold' /> </button>
      </form>
    </div>
  )
}