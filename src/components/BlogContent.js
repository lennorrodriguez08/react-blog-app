import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPen, faCalendar } from '@fortawesome/free-solid-svg-icons'
import Button from '../shared/Button'
import classes from './BlogContent.module.css'


function BlogContent( { blogsData } ) {

    return (
        <div id="blog-content">
            { blogsData.map(blog => {
                return (
                    <article className={classes.article} id={blog.id} key={blog.id}>
                        <img src={blog.image_url} alt="Blog" width='100%' />
                        <h2>{blog.title}</h2>
                        <p><FontAwesomeIcon icon={faUserPen} /> <a href="https://github.com/lennorrodriguez08/react-blog-app" target='_blank' rel='noreferrer'>{blog.author}</a></p>
                        <p><FontAwesomeIcon icon={faCalendar} />&nbsp;&nbsp;{blog.date_posted}</p>
                        <p>{blog.introductory}</p>
                        <Button><Link to="/modify-blog">Read more</Link></Button>
                    </article>
                )
            }) }
        </div>
    )

}

export default BlogContent