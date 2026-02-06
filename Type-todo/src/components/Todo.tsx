import type { ITodo } from "../App"

interface ITodoProps extends ITodo {
  deleteTodo: (todo: ITodo) => void;
  toggleTodo: (todo: ITodo) => void; 
}



export const Todo = ({name, id, filter, deleteTodo, toggleTodo}: ITodoProps) => { 
    return(
          <li className={`todo-item ${filter === 'completed' ? 'completed' : ''}`}>
          <input type="checkbox" className="todo-checkbox" checked={filter === 'completed'} onChange={() => toggleTodo({id, name, filter})}/>
          <span className="todo-text">
            {name}
          </span>
          <button className="btn btn-delete" onClick={() => deleteTodo({name, id, filter})}>
            Удалить
          </button>
        </li> 
    )
}