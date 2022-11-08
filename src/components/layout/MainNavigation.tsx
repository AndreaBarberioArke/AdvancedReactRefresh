import { Link } from "react-router-dom";
import "./MainNavigation.css";
export const MainNavigation = () => {
  return (
    <header>
      <div>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
            <Link to="/new-meetups">New Meetups</Link>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
