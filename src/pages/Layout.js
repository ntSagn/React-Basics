import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blogs">Blogs</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/practice">Practice</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/game">Game</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/form">Form</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cal">Calculator</Link>
          </li>
        </ul>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;