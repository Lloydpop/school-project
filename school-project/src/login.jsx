import logo from "./logo/mysucesslogo.png"
import {BtnOne, BtnTwo} from "./components/button/button.component";
import {Signinput, Payinput} from "./components/input/input.component";
import vector from "./logo/Vector.png"

const Login= () => {
    return ( 
        <div className="container">
        <form action="">
        <header>
            <div className="vector">
              <img src={vector} alt="" />
            </div>
            <p>login</p>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
        </header>
        <div className="txt" style={{marginTop:"200px", fontStyle:"italic"}}>
            <p>welcome to my <span className="green">MY SUCCESS</span>!</p>
            <p>login to contine</p>
        </div>
        <div className="inputs">
            <Signinput label="email-address" height="55px" width="307px"/>
            <Signinput label="phone number"  height="55px" width="307px"/>
            <div className="forgot">
               <a href="/" style={{textTransform:"capitalize"}}>forgot password?</a>
            </div>
        </div>
        <footer>
           <BtnOne title="validate" width="309px" height="52px"/>
           <p>Do not have an Account? <a href="/">sign up</a></p>
        </footer>
        </form>
        </div>
    );
}
 
export default Login;