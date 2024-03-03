

export default function Button_yes({onSetClick,...props}){
    return(
        <div id="buttons-div">
        <button onClick={onSetClick} {...props}>
            TAAAK
        </button>
        </div>
    )
}