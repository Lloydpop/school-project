
import vector1 from "./logo/vector1.png"
import vector2 from "./logo/vector2.png"
import vector3 from "./logo/vector3.png"
import vector5 from "./logo/vector5.png"
import vector6 from "./logo/vector6.png"
import line from "./logo/line.png"
import {BtnOne} from "./components/button/button.component";
import {Signinput} from "./components/input/input.component";

const Signup = () => {
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
                <h3>good to have you here student</h3>
                <p>let's get you started</p>
                <div className="tick">
                  <div className="green">
                    <img src={vector5} alt="" />
                  </div>
                  <div>
                    <img src={line} alt="" />
                  </div>
                  <div className="border">
                    <img src={vector6} alt="" />
                  </div>
               </div>
               <p>school information</p>
              </div>
               <div className="input-container">
               <div className="inputs">
                <div className="icon">
                   <div>
                    <img src={vector1} alt="" />
                   </div>
                </div>
                <div style={{marginLeft:"40px"}}>
                  <Signinput type="text" name="fname" id="fname"  placeholder="your name" label="full name"/>
                </div>
               </div>
               <div className="inputs">
                <div className="icon">
                   <div>
                    <img src={vector2} alt="" />
                   </div>
                </div>
                <div style={{marginLeft:"40px"}}>
                  <Signinput type="Email" name="ename" id="ename"  placeholder="youremail@gmail.com"label="email" />
                </div>
               </div>
               <div className="inputs">
                <div className="icon">
                   <div>
                    <img src={vector3} alt="" />
                   </div>
                </div>
                <div style={{marginLeft:"40px"}}>
                  <Signinput   type="password" name="fpsw" id="fpsw"  placeholder="********" label="password"/>
                </div>
               </div>
               <div className="inputs">
                <div style={{marginLeft:"40px"}}>
                  <Signinput  type="password" name="cpsw" id="cpsw"  placeholder="********" label="password"/>
                </div>
               </div>
               </div>
               <div className="btn">
                <BtnOne title="Login" height="50px" width="100%"/>
               </div>
               <div>
                <p>Already have an Account? <a href="">sign in</a></p>
               </div>
            </form>
           </div>
          </div>
           );
}
 
export default Signup;