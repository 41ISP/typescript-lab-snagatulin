import { useState, type FormEvent } from 'react'
import './App.css'
import { Filter, type TCategory } from './components/Filter'
import { Form, type IFormData } from './components/Form'
import { Todo } from './components/Todo'

export interface ITodo {
  id: number,
  name: string,
  filter: TCategory,
}

const inittialTodos: ITodo[] = [
    {
        id: Date.now(),
        name: "Выучить Typescript",
        filter: "active"
    },
    {
        id: Date.now(),
        name: "Выучить Кутиководство",
        filter: "completed"   
    }
]

export function App() {
    const [todos, setTodos] = useState<ITodo[]>(inittialTodos);
    const [formData, setFormData] = useState<IFormData>({
        name: "",
        filter: "all",
    })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newTodo = {
      ...formData,
      id: Date.now()
    }
    setTodos((old) => [...old, newTodo])
  }  

  return (
       <div className="app-container">
      <h1 className="app-title">📝 Мои задачи</h1>  
      {/* Форма добавления задачи */}
      <Form 
      formData={formData} 
      setFormData={setFormData} 
      handleSubmit={handleSubmit}/>
      
      {/* Кнопки фильтрации */}
      <Filter/>
      
      {/* Список задач */}
      <ul className="todo-list">
          {todos.map((el) => <Todo {...el}/>)}
            </ul>
    </div>
  )
}

