import './App.module.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
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
      </Switch>
      <footer> 
         <Footer />
      </footer>
    </div>
    </Router>
  )
}

