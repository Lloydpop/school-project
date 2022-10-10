import './App.css';
import Signup from './Signup';
import Login from './login';
function App() {
  return (
    <div className="content">
      <div className="form-container">
         <Signup/>
         <Login/>
      </div>
    </div>
  );
}

export default App;
