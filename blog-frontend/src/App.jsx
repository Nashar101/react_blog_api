import {BrowserRouter as Router} from "react-router-dom";
import NavBar  from "./components/NavBar"
import './App.css'
import AppRoutes from "./components/AppRoutes.jsx";
function App() {

  return (
      <Router>
       p   <h1>React on Rails Blog</h1>
          <p>Find this layout in client/src/App.jsx</p>
          <br/>
          <NavBar/>
          <AppRoutes/>
      </Router>

  )
}

export default App
