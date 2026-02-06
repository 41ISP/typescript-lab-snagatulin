export type TCategory = "active" | "completed" | "all";

interface IFilterProps {
  currentFilter: TCategory;
  onFilterChange: (category: TCategory) => void;
}

export const Filter = ({ currentFilter, onFilterChange }: IFilterProps) => {
  return (
    <div className="filter-buttons">
      <button 
        className={`btn btn-filter ${currentFilter === 'all' ? 'active' : ''}`}
        onClick={() => onFilterChange('all')}>
        Все
      </button>

      <button 
        className={`btn btn-filter ${currentFilter === 'active' ? 'active' : ''}`}
        onClick={() => onFilterChange('active')}>
        Активные
      </button>

      <button 
        className={`btn btn-filter ${currentFilter === 'completed' ? 'active' : ''}`}
        onClick={() => onFilterChange('completed')}>
        Завершённые
      </button>
    </div>
  );
};
