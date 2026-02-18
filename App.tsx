import { Route, Switch } from "wouter";
import Home from "./Home";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path="/:rest*" component={Home} /> 
    </Switch>
  );
}

function App() {
  return (
    <div className="dark">
      <Router />
    </div>
  );
}

export default App;
