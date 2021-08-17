const Filter = (props) => {
  const searchContact = (event) => {
    props.onFilterChange(event.target.value);
  };

  return (
    <div>
      <h2>Find contacts by name</h2>
      <input type="text" name="search" onChange={searchContact}></input>
    </div>
  );
};

export default Filter;
