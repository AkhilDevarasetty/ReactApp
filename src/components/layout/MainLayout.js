import { Link } from "react-router-dom";
import mainlayoutClass from './MainLayout.module.css';

function MainLayout() {
  return (
    <div>
      <header className={mainlayoutClass.header}>
        <h1 className={mainlayoutClass.logo}>React Routing</h1>
      <nav>
        <ul>
          <li>
            <Link to="/all-meetups">All Meetups Page</Link>
          </li>
          <li>
            <Link to="/new-meetups">NewMeetups Page</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites Page</Link>
          </li>
        </ul>
      </nav>
      </header>
    </div>
  );
}

export default MainLayout;
