import './App.css';
import './style.css';
// import style from './style';
import Navigation from './components-2/Navigation';
import Content from './components-2/Content';
import About from './components-2/About';
import Home from './components-2/Home';
import Dashboard from './components-2/Dashboard';
import Login from './components-2/Login';
// import { Switch } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from './components-2/PrivateRoute';
import Projects from './components-2/Projects';


function App() {
  const location = window.location.pathname;
  console.log(location);
  // const navigate = useNavigate();
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/content" element={<Content />}></Route>
        {/* <Route render = {() => {<h1>kuhvbdj</h1>}}></Route> */}
        {/* <PrivateRoute path="/about" element={<About />} ></PrivateRoute> */}
        <Route>
          
        </Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/projects" element={<Projects />} ></Route>
        <Route path="/dashbord" element={<Dashboard />} ></Route>
        <Route path="/logout" element={<Navigate to={'/login'} />}></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      {/* {location === "/" && <Content />}
      {location === "/about" && <About />} */}
    </div>
  );
}

export default App;
