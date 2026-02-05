import type { ITodo } from "../App"

interface ITodoProps extends ITodo {}

export const Todo = ({name, id, filter}: ITodoProps) => {
    return(
          <li className="todo-item">
          <input type="checkbox" className="todo-checkbox"/>
          <span className="todo-text">
            {name}
          </span>
          <button className="btn btn-delete">
            Удалить
          </button>
        </li> 
    )
}