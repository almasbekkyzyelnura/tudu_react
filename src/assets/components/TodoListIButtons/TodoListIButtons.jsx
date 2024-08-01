import './TodoListIButtons.css';

const TodoListIButtons = (props) => {
  return (
    <div className='buttons'> 
        <button onClick={props.deleteDoneTasks} className='buttons1'>Delete done tasks</button>
        <button onClick={props.deleteAllTasks} className='buttons1' >Delete all tasks</button>
    </div>
  )
}

export default TodoListIButtons;
