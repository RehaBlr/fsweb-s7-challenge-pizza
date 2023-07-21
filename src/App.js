import React from "react";

import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";

import Anasayfa from "./components/Anasayfa/Anasayfa";
import Form from "./components/Form/Form";
import Order from "./components/Order/Order";

const App = () => {
  return (
    <>
      {/* <Link to="/Form">Forma git</Link> */}

      <Switch>
        <Route path="/" exact>
          <Anasayfa />
        </Route>
        <Route path="/pizza" exact>
          <Form />
        </Route>
        <Route path="/Order" exact>
          <Order />
        </Route>
      </Switch>
    </>
  );
};
export default App;
