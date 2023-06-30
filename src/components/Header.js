import classes from './Header.module.css'

function Header({ children }) {

    return (
        <header className={classes.header}>
            { children }
        </header>
    )

}

export default Header