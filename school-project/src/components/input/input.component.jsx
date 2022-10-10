
const Signinput = (props) => {
    const type=props.type
    const label=props.label
    const name=props.name
    const Id=props.Id
    const height=props.height
    const width= props.width
    return ( <div className="form-section">
      <div className="input-control-sign">
        <div>
          <input type={type} name={name} id={Id} style={{width:width, height:height}} placeholder={label}/>
        </div>
      </div>
    </div> );
}
 
const Payinput = (props) => {
    const placeholder=props.placeholder
    const type=props.type
    const name=props.name
    const Id=props.Id
    const height=props.height
    const width= props.width
    return ( <div className="form-section">
      <div className="input-control">
        <div className="input-holder">
           <input type={type} name={name} id={Id} placeholder={placeholder} style={{width:width, height:height}}/>
        </div>
      </div>
    </div> );
}
export {Signinput, Payinput};
