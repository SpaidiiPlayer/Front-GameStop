import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import ContentUser from "./components/ContentUser.jsx";
import NewAccount from "./components/NewAccount.jsx";
import Login from "./components/Login.jsx";
import Content from "./components/Content.jsx";
import Register from "./components/Register.jsx";
import Editor from "./components/Editor.jsx";
import "./global.css";
import Buy from "./components/Buy.jsx";
import { SuccessPurchase } from "./components/SuccessPurchase.jsx";
import { Profile } from "./components/Profile.jsx";

export function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={ContentUser} />
          <Route path="/Register" component={Register} />
          <Route path="/Editor" component={Editor} />
          <Route path="/Login" component={Login} />
          <Route path="/NewAccount" component={NewAccount} />
          <Route path="/Admin" component={Content} />
          <Route path="/Buy" component={Buy} />
          <Route path="/Success" component={SuccessPurchase} />
          <Route path="/Profile" component={Profile} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
