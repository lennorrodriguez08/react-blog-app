import classes from './Container.module.css'

function Container({ children }) {

    return (
        <div className={classes.main_container}>
            <div className={classes.sub_container}>
                { children }
            </div>
        </div>
    )

}

export default Container