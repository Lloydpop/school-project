import logo from "./logo/mysucesslogo.png"
import {BtnOne, BtnTwo} from "./components/button/button.component";
import {Signinput, Payinput} from "./components/input/input.component";
import vector from "./logo/Vector.png"
const Signup = () => {
    return ( <div className="container">
        <form action="">
        <header>
            <div className="vector">
              <img src={vector} alt="" />
            </div>
            <p>sign up</p>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
        </header>
        <div className="txt">
            <p>welcome to my <span className="green">MY SUCCESS</span>!</p>
            <p>sign up to get started</p>
            <Signinput label="first name" height="55px" width="307px"/>
            <Signinput label="last name"  height="55px" width="307px"/>
            <Signinput label="E-mail address"  height="55px" width="307px"/>
            <Signinput label="phone number"  height="55px" width="307px"/>
            <Signinput label="select university"  height="55px" width="307px"/>
        <footer style={{marginTop:"50px"}}>
           <BtnOne title="validate" width="309px" height="52px"/>
           <p>already have an account? <a href="/">login</a></p>
        </footer>
        </div>
        </form>
    </div> );
}
 
export default Signup;