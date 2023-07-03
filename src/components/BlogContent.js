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
                        <p><FontAwesomeIcon icon={faUserPen} /> {blog.author}</p>
                        <p><FontAwesomeIcon icon={faCalendar} />&nbsp;&nbsp;{blog.date_posted}</p>
                        <p>{blog.introductory}</p>
                        <Button>Read more</Button>
                    </article>
                )
            }) }
        </div>
    )

}

export default BlogContent