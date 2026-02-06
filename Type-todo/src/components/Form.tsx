import {useEffect, type ChangeEvent, type Dispatch,  type FormEvent,  type SetStateAction } from "react"
import type { ITodo } from "../App"



export interface IFormData extends Omit<ITodo, "id"> {}

interface IFormProps {
    formData: IFormData,
    setFormData: Dispatch<SetStateAction<IFormData>>,
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export const Form = (
    { formData, setFormData, handleSubmit }: IFormProps
) => {
    const handleFormChange = (
        e: ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target
        setFormData((old) => ({ ...old, [name]: value }))
    }

    useEffect(() => {console.log(formData)},
    [formData])

    return(
    <form className="todo-form" onSubmit={handleSubmit} >
        <input onChange={handleFormChange} value={formData.name} type="text" className="todo-input" placeholder="Введите новую задачу..." name="name"/>
        <button type="submit" className="btn btn-add"> Добавить</button>
      </form>    
    )
}