import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPen, faCalendar, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import classes from './BlogContent.module.css'
import BlogContext from '../context/BlogContext'

function BlogArticle() {

    const { blogsData } = useContext(BlogContext), { id } = useParams(), idParams = blogsData.filter(blog => blog.id === Number(id))

    return (
        <div id="blog-content">
            { idParams.map(blog => {
                return (
                    <article className={classes.article} id={blog.id} key={blog.id}>
                        <Link className="strong pb_10 d-block" to='/'><FontAwesomeIcon icon={faCircleArrowLeft} /> Back to homepage</Link>
                        <img src={blog.image_url} alt="Blog" width='100%' />
                        <h2>{blog.title}</h2>
                        <p><FontAwesomeIcon icon={faUserPen} /> <a href="https://github.com/lennorrodriguez08/react-blog-app" target='_blank' rel='noreferrer'>{blog.author}</a></p>
                        <p><FontAwesomeIcon icon={faCalendar} />&nbsp;&nbsp;{blog.date_posted}</p>
                        <p>{blog.article}</p>
                    </article>
                )
            }) }
        </div>
    )

}

export default BlogArticle