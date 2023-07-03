import classes from './Button.module.css'

function Button( { children } ) {

    return (
        <button type="submit" className={classes.button}>{ children }</button>
    )

}

export default Button