
const BtnOne = (props) => {
    const title=props.title
    const width=props.width
    const height=props.height

    return ( 
    <div>
        <button className="btn-background" style={{width:width, height:height}}>{title}</button>
    </div>
     );
}
 
const BtnTwo = (props) => {
    const title= props.title
    const width=props.width
    const height=props.height
    return ( 
    <div>
         <button className="btn-border" style={{width:width, height:height}}>{title}</button> 
    </div> 
    );
}
 
export  {BtnOne, BtnTwo};