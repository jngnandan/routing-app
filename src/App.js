

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom"

import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="flex flex-col justify-start px-3 h-screen">
    <Router>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>

    </Router>

  </div>
)

export default App