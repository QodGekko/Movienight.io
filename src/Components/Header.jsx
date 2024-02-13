import classes from "./Header.module.css";
import SearchBar from "../UI/SearchBar";
const Header = (props) => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className={classes.logo}>
          <img src="" alt="logo" />
          <h3>MovieNight.</h3>
        </div>
        <div className={classes.navigation}>
          <ul className={classes.nav_items}>
            <li>Home</li>
            <li>Show Times</li>
            <li>Ticket Price</li>
            <li>Concession</li>
            <li>Contacts</li>
            <li>About Us</li>
          </ul>
        </div>
        <SearchBar
          onClick={props.onClick}
          value={props.value}
          onChange={props.onChange}
        />
      </nav>
    </header>
  );
};

export default Header;
