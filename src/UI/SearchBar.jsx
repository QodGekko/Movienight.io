import classes from "./SearchBar.module.css";
import ViteLogo from "./search.svg";
const SearchBar = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={submitHandler} className={classes.search}>
        <input
          className={classes.input}
          type="text"
          placeholder="search for movies..."
          onChange={props.onChange}
          value={props.value}
        />
        <img
          onClick={props.onClick}
          className={classes.search_icon}
          src={ViteLogo}
          alt="icon"
        />
        {/* <button onClick={props.onClick}>search</button> */}
      </form>
    </>
  );
};

export default SearchBar;
