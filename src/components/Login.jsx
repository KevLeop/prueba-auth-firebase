import React, { useState } from "react";
import { auth } from "../firebase-config";
import { useHistory } from "react-router-dom";

const Login = () => {
  const historial = useHistory();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [msgerror, setMsgerror] = useState(null);

  const registrarUsuario = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, pass)
      .then((r) => {
        historial.push("/");
      })
      .catch((e) => {
        if (e.code === "auth/invalid-email") {
          setMsgerror("Formato de usuario invalido");
        }
        if (e.code === "auth/weak-password") {
          setMsgerror("La contraseña debe tener más de 6 chars");
        }
      });
  };

  const loginUsuario = () => {
    auth
      .signInWithEmailAndPassword(email, pass)
      .then((rpta) => {
        historial.push("/");
        setMsgerror(null);
      })
      .catch((err) => {
        if (err.code === "auth/wrong-password") {
          setMsgerror("Password incorrecta");
        }
        if (err.code === "auth/user-not-found") {
          setMsgerror("Usuario incorrecto");
        }
      });
  };

  return (
    <div className="row mt-5">
      <div className="col"></div>
      <div className="col">
        <form className="form-group" onSubmit={registrarUsuario}>
          <input
            className="form-control"
            type="email"
            placeholder="Introduce el email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className="form-control mt-4"
            type="password"
            placeholder="Introduce la contraseña"
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <input
            type="submit"
            className="form-control mt-4 btn btn-block btn-dark"
            value="Registrar usuario"
          />
        </form>
        <button className="btn btn-success btn-block" onClick={loginUsuario}>
          Iniciar Sesion
        </button>
        {msgerror == null ? <span></span> : <div>{msgerror}</div>}
      </div>
      <div className="col"></div>
    </div>
  );
};

export default Login;
