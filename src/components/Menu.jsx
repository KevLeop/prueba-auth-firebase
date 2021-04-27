import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase-config";

const Menu = () => {
  const historial = useHistory();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUsuario(user.email);
        console.log(user.email);
      }
    });
  }, []);

  const cerrarSesion = () => {
    auth.signOut();
    setUsuario(null);
    historial.push("/");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Inicio
            </Link>
          </li>
          <li className="nav-link">
            {!usuario ? <Link to="/login">Login</Link> : <span></span>}
          </li>

          <li className="nav-link">
            {usuario ? <Link to="/admin">Admin</Link> : <span></span>}
          </li>
        </ul>
        {usuario ? (
          <button className="btn btn-danger" onClick={cerrarSesion}>
            Cerrar Sesion
          </button>
        ) : (
          <span></span>
        )}
      </nav>
    </div>
  );
};

export default Menu;
