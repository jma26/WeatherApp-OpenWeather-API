import './search.css';

const Search = (props) => {
  const {
    inputValue,
    onSubmit,
    onInputChange,
  } = props;

  return (
    <form className="search-form" onSubmit={(event) => onSubmit(event)}>
      <input
        className="search-input"
        type="text"
        placeholder="Search by City"
        onChange={onInputChange}
        value={inputValue}
      />
    </form>
  );
}

export default Search;