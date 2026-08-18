import mystyle from '../style.module.css'
function Employee({dataFromparent,str,flag}){
    //js code
    
    return(
        <>
        <h1 className={mystyle.title}>Employee component</h1>
    {
       dataFromparent? <h3 className="text-danger">Employee Name:{dataFromparent}</h3>:
       <p>Nothing to display</p>
    }
        </>
    )
}
export default Employee