import { FaBook } from "react-icons/fa";
import './TodoInput.css'
import { useEffect, useRef, useState } from 'react'

const TodoInput = (props) => {
    const inputRef = useRef(null)
    const [value, setValue] = useState('')
    useEffect(() => { 
        setValue(props.name)
    }, [props.name])

    const handleTask = () => {
        const newTaskText = inputRef.current.value.trim();
        if (newTaskText !== '') {
            props.addNewTask(newTaskText)
            inputRef.current.value = ''; 
        }
         };
    return (
        <div className='input'>
            <h2>TodoInput</h2>
            <div className='textt'>
                <h6><FaBook /></h6>
                <input onChange={(e) =>{
             setValue(e.target.value)
                }} value={value} ref={inputRef} className='input-text' type="text" placeholder="New todo" />
                <button onClick={handleTask} className='input-btn'>
                    {props.name?'save': 'Add New Task'}
                   
                    </button>
            </div>
        </div>
    )
}

export default TodoInput;

