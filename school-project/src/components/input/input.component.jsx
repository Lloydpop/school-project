
const Signinput = (props) => {
    const type=props.type
    const label=props.label
    const name=props.name
    const Id=props.Id
    const placeholder=props.placeholder
    const height=props.height
    return ( <div className="form-section">
      <div className="input-control-sign">
        <div>
          <label htmlFor="">{label}</label>
          <input type={type} name={name} id={Id} style={{height:height}} placeholder={placeholder} label={label}/>
        </div>
      </div>
    </div> );
}
 
const Payinput = (props) => {
    const placeholder=props.placeholder
    const label=props.label
    const type=props.type
    const name=props.name
    const Id=props.Id
    const height=props.height
    return ( <div className="form-section">
      <div className="input-control">
        <div className="input-holder">
          <label htmlFor={Id}>{label}</label>
           <input type={type} name={name} id={Id} placeholder={placeholder} style={{height:height}}/>
        </div>
      </div>
    </div> );
}
export {Signinput, Payinput};
