import logo from './logo.svg';
import './App.css';
//import PropsComponent from './components/functionalcomponents/PropsComponents';
//import StateComponent from './components/classcomponents/StateComponent';
import NavBar from './components/functionalcomponents/NavBar';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import About from './components/functionalcomponents/About';
import Experience from './components/functionalcomponents/Experience';
import Home from './components/functionalcomponents/Home';
import Login from './components/functionalcomponents/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/experience" element={<Experience />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Home" element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
      </Routes>
      </BrowserRouter>
      {/*<PropsComponent name="Hello everyone" course="ECE"></PropsComponent>*/}
      <header className="App-header">
       {/*<Statecomponent/>*/}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <footer>
      <p>&copy; 2024 All Rights Reserved By <span>authorized</span></p>
      </footer>
      
    </div>
  );
}

export default App;
