

import './TodoFilter.css'

const TodoFilter = (props) => {
  const { setFilter,filter } = props
  return (
    <div className='filter'>
      
<button onClick={() => props.setFilter('all')} className={`all ${props.filter === 'all' && 'active'}`}>All</button>
<button onClick={() => props.setFilter('done')} className={`all ${props.filter === 'done' && 'active'}`}>Done</button>
<button onClick={() => props.setFilter('todo')} className={`all ${props.filter === 'todo' && 'active'}`}>Todo</button>

    </div>
  )
}

export default TodoFilter

