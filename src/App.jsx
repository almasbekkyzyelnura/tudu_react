
import { useState } from 'react'
import './App.css'
import TodoInput from './assets/components/TodoInput/TodoInput'
import TodiList from './assets/components/TodoList/TodiList'
const tasks = [
  {
    name: 'Learn     JS basics',
    done: true,
    id: 1,
  },
  {
    name: 'Learn React     JS basics',
    done: true,
    id: 2,
  },
  {
    name: 'Learn Redux     JS basics',
    done: false,
    id: 3,
  }
]
function App() {
  const [array, setArray] = useState(tasks)
  const [filter, setFilter] = useState('all')
  const [selected, setSelected] = useState(null)
  const addNewTask = (text) => {
    if (selected?.id) {
      const updateTasks = array.map(t => t.id === selected?.id ? { ...t, name: text } : t)
      setArray(updateTasks)
      return
    }
    const newTask = {
      name: text,
      done: false,
      id: Math.random()
    }
    setArray([...array, newTask])

  }
  const deleteTask = (taskId) => {
    const tasks = array.filter(item => item.id !== taskId)
    setArray(tasks)

  }
  const deleteAllTasks = () => {
    setArray([]);
  };
  const filterTasks = (text, array,) => {
    switch (text) {
      case 'all': {
        return array
      }
      case 'done': {
        return array.filter((item) => item.done === true)
      }
      case 'todo': {
        return array.filter((item) => item.done === false)
      }
    }
  }
  const array2 = filterTasks(filter, array)

  const deleteDoneTasks = () => {
    const activeToDo = array.filter(item => item.done === false)
    setArray(activeToDo);
  };
  const selectTask = (task) => {
    setSelected(task)
  }
  return (
    <div className='container'>
      <TodoInput addNewTask={addNewTask} name={selected?.name} />
      <TodiList
        selectTask={selectTask}
        deleteTask={deleteTask}

        filter={filter}
        deleteAllTasks={deleteAllTasks}
        setFilter={setFilter}
        deleteDoneTasks={deleteDoneTasks}
        array={array2} />
    </div>
  )
}

export default App
