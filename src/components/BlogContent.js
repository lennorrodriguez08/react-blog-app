import classes from './BlogContent.module.css'

function BlogContent( { blogsData } ) {

    return (
        <div id="blog-content">
            { blogsData.map(blog => {
                return (
                    <article className={classes.article} id={blog.id} key={blog.id}>
                        <img src={blog.image_url} alt="Blog image" width='100%' />
                        <h2>{blog.title}</h2>
                        <p>{blog.author}</p>
                        <p>{blog.date_posted}</p>
                        <p>{blog.introductory}</p>
                    </article>
                )
            }) }
        </div>
    )

}

export default BlogContent