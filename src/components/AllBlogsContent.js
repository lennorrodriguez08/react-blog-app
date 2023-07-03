import BlogContent from './BlogContent'

function AllBlogsContent( { blogsData } ) {
   
    return (
        <section id="all-blogs-content">
            <BlogContent blogsData={blogsData} />
        </section>
    )

}

export default AllBlogsContent