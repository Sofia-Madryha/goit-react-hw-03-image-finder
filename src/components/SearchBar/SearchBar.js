export const SearchBar = ({ onSubmit}) => {
  return (
    <div className="Searchbar">
        
      <form className="SearchForm" onSubmit = {onSubmit}>
        
        <button className="SearchForm-button"></button>
          <input className="SearchForm-input"
            type="text"
            name="query"
            placeholder="Search"
            
          />
      </form>
    </div>
  );
};
