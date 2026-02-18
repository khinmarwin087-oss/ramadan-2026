import { Route, Switch, Router as WouterRouter } from "wouter";
import Home from "./Home";

// GitHub Pages အတွက် base path သတ်မှတ်ခြင်း
// ဥပမာ- https://username.github.io/ramadan-2026/ ဆိုရင် base က /ramadan-2026 ဖြစ်ရမယ်
const base = import.meta.env.BASE_URL.replace(/\/$/, "");

function Router() {
  return (
    <WouterRouter base={base}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/:rest*" component={Home} /> 
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Router />
    </div>
  );
}

export default App;
