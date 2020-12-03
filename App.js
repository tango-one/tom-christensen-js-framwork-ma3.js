import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import News from "./pages/News";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/news">
          <News />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
