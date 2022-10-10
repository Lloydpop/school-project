import './App.css';
import {BtnOne, BtnTwo} from "./components/button/button.component";
import {Signinput, Payinput} from "./components/input/input.component";
function App() {
  return (
    <div className="content">
      <Signinput id="sign in" label="password" height="60px" width="300px"/>
      <Payinput placeholder="cvv" height="56px"/>
      <BtnOne width="305px" height="70px" title="login"/>
      <BtnTwo width="305px" height="70px" title="subscribed"/>
    </div>
  );
}

export default App;
