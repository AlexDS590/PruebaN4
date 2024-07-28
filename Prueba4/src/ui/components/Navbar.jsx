import { NavLink } from "react-router-dom"


export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg mb-5" data-bs-theme="dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/home">Inicio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/marvel">Marvel</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/dc">DC</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Desconectarse</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
