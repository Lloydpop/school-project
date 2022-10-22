
import vector1 from "./logo/vector1.png"
import vector2 from "./logo/vector2.png"
import vector3 from "./logo/vector3.png"
import {BtnOne} from "./components/button/button.component";
import {Signinput} from "./components/input/input.component";

const Login = () => {
    return ( <div className="container">
           <div className="logo">
              <div className="logo-text">
                <h3><span>MY</span>SuccessApp</h3>
                <div className="rect">
                  <div className="rect-i"></div>
                  <div className="rect-i"></div>
                  <div className="rect-i"></div>
                  <div className="rect-i"></div>
                </div>
              </div>
           </div>
           <div>
            <form action="">
              <div className="header">
                <h3>Welcome back student</h3>
                <p>let's get you in</p>
              </div>
               <div className="input-container">
               <div className="inputs">
                <div className="icon">
                   <div>
                    <img src={vector2} alt="" />
                   </div>
                </div>
                <div style={{marginLeft:"40px"}}>
                  <Signinput type="email" name="email" id="email-id" placeholder="youremail@gmail.com" label="email"/>
                </div>
               </div>
               <div className="inputs">
                <div className="icon">
                   <div>
                    <img src={vector3} alt="" />
                   </div>
                </div>
                <div style={{marginLeft:"40px"}} className="forgot">
                  <Signinput type="password" name="password" id="psw" placeholder="********" label="password"/>
                  <a href="">forgot password?</a>
                </div>
               </div>
               </div>
               <div className="btn" style={{paddingTop:"50px"}}>
                <BtnOne title="Login" height="50px" width="100%"/>
               </div>
               <div>
                <p>Don't have an Account? <a href="">sign up</a></p>
               </div>
            </form>
           </div>
          </div>
           );
}
 
export default Login;