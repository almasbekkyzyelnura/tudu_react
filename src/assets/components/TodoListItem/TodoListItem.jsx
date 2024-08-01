
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import  './TodoListItem.css'

const TodoListItem = (props) => {
    const{name,done,id, selectTask} = props;
    let classs = ''
    if (done) {
        classs+= ' done'
    }
    const handleEdid = () => {
        const task ={
            id,name
        }
        
        selectTask(task)
    }
  return (
    
    <div className='list'>
        <p className={classs}>{name}</p>
        <div className="icons">
            <input className='checkbox' type="checkbox" />
            <button className='edid' onClick={handleEdid}><FaPen /></button>
            <button onClick= {() =>{
                props.deleteTask(id)
            }
            } className='delete'><MdDelete /></button>
        </div>
        
    </div>
    
   
    

 
  )
}

export default TodoListItem