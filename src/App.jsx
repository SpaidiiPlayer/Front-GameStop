import './App.module.css'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { Content } from './components/Content.jsx'
import './global.css'


export function App(){

  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  )
}

