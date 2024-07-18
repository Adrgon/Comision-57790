import { Link } from "react-router-dom";
import CardWidget from "../CardWidget/CardWidget";


function NavBar({ title }) {
  return (
    <nav
      style={{ width: "80%", margin: "0 auto" }}
      className="navbar navbar-expand-lg bg-body-tertiary"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/category/phones"
              >
                Phones
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/tablets">
                Tablets
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="category/computers">
                Computers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="ejemplo">
                Ejemplo
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <CardWidget />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
