import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Admin from "./components/Admin";
import Inicio from "./components/Inicio";
import Login from "./components/Login";
import Menu from "./components/Menu";

const App = () => {
  return (
    <main className="container-fluid">
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route path="/admin" component={Admin}></Route>
          <Route path="/login" component={Login}></Route>
          <Route exact path="/" component={Inicio}></Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export default App;
