import { Link } from 'react-router-dom'
import classes from './Navigation.module.css'
import Header from './Header'

function Navigation() {

    return (
        <Header>
            <nav className={classes.nav}>
                <div>
                    <Link to='/'><h1>Blog App</h1></Link>
                </div>
                <ul>
                    <li><Link to='/'>All Blogs</Link></li>
                    <li><Link to='/modify-blog'>Modify Blog</Link></li>
                </ul>
            </nav>
        </Header>
    )

}

export default Navigation