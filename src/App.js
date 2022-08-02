import {
  Routes,
  Route,
} from "react-router-dom";
import Login from './Login';
import Home from './Home';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login {...props}/>} />
        <Route path="/login" element={<Login {...props}/>} />
        <Route path="/home" element={<Home {...props}/>} />
      </Routes>
    </div>
  );
}

export default App;
