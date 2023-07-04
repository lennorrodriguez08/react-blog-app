import classes from './Button.module.css'

function Button( { children, disabled = false, onClick = () => {} } ) {
   
    return (
        <button type="submit" className={classes.button} disabled={disabled} onClick={onClick}>{ children }</button>
    )

}

export default Button