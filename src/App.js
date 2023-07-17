import React from "react";

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";

import Anasayfa from "./components/Anasayfa/Anasayfa";
import Form from "./components/Form/Form";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Anasayfa />
        </Route>
        <Route path="/Form" exact>
          <Form />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default App;
