export type TCategory = "active" | "completed" | "all"

export const Filter = ({}) => {
    return(
        <div className="filter-buttons">
        <button className="btn btn-filter active">
          Все
        </button>
        <button className="btn btn-filter">
          Активные
        </button>
        <button className="btn btn-filter">
          Завершённые
        </button>
      </div>   
    )
}