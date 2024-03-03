
export default function Button_no({children,onSetClick}){
    
    return(
        <div id="buttons-div">
        <button onClick={onSetClick} id = "button-no">
            {children}
        </button>
        </div>
    )
}