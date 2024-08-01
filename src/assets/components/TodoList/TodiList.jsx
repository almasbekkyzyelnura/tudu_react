

import TodoFilter from '../TodoFilter/TodoFilter'
import TodoListItem from '../TodoListItem/TodoListItem'
import TodolistiButtons from '../TodoListIButtons/TodoListIButtons'
import './TodoList.css'

const TodiList = (props) => {
  return (
    <div>

      <h2>TodiList</h2>

      <TodoFilter setFilter={props.setFilter} filter={props.filter} />
      {props.array.length===0  && <h1 style ={{ textAlign:'center'}}>Пока задачи нет</h1> }
      {props.array.map(item=><TodoListItem  {...item} deleteTask={props.deleteTask} selectTask={props.selectTask} />
    )}
     <TodolistiButtons deleteAllTasks={props.deleteAllTasks} deleteDoneTasks={props.deleteDoneTasks} />
    </div>
  )
}

export default TodiList