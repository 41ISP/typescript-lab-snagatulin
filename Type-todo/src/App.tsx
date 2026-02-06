import { useEffect, useState, type FormEvent } from 'react'
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
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [formData, setFormData] = useState<IFormData>({
        name: "",
        filter: "active",
    })
    const [filter, setFilter] = useState<TCategory>("all")
    const activeCount = todos.filter(t => t.filter === 'active').length;

    useEffect(() => {
        const savedData = localStorage.getItem('my_todos');
        if (savedData) {
            setTodos(JSON.parse(savedData));
        } else {
            setTodos(inittialTodos); 
        }
    }, []);
  
  useEffect(() => {
    const todosData = JSON.stringify(todos);
    localStorage.setItem('my_todos', todosData);
  }, [todos]); 

  const deleteTodo = (e: ITodo) => {
    setTodos(todos.filter(todo => todo.id !== e.id));
  }

  const toggleTodo = (e: ITodo) => {
    setTodos(todos.map(todo => 
      todo.id === e.id ? { ...todo, filter: todo.filter === "active" ? "completed" : "active"} : todo
    ));
  };

  const getFilteredTodos = () => {
    if (filter === 'active') {
      return todos.filter(todo => todo.filter == "active");
    }
    if (filter === 'completed') {
      return todos.filter(todo => todo.filter == "completed");
    }
    return todos; // 'all'
  };


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
    <div className="todo-stats">
    <span>Активных задач: {activeCount}</span>
    </div>

      {/* Форма добавления задачи */}
      <Form 
      formData={formData} 
      setFormData={setFormData} 
      handleSubmit={handleSubmit}/>
      
      {/* Кнопки фильтрации */}
      <Filter currentFilter={filter} 
      onFilterChange={(val) => setFilter(val)}/>
      
      {/* Список задач */}
      <ul className="todo-list">
          {getFilteredTodos().map((el) => <Todo key={el.id} {...el} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>)}
            </ul>
    </div>
  )
}

