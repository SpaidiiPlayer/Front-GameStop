import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import ContentUser from './components/ContentUser.jsx'
import NewAccount from './components/NewAccount.jsx';
import Login  from './components/Login.jsx'
import Content from './components/Content.jsx'
import Register from './components/Register.jsx';
import Editor from './components/Editor.jsx'
import './global.css'


export function App(){ 

  return (

    <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Content} />
        <Route path="/Register" component={Register} />
        <Route path="/Editor" component={Editor} />
        <Route path="/Login" component={Login} />
        <Route path="/NewAccount" component={NewAccount} />
        <Route path="/User" component={ContentUser} />
      </Switch>
      <Footer />
    </div>
    </Router>
  )
}

