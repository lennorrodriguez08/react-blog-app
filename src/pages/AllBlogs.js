import AllBlogsContent from '../components/AllBlogsContent'

function AllBlogs( { blogsData } ) {
   
    return (
        <div>
            <h1>All Blogs Page</h1>
            <AllBlogsContent blogsData={blogsData} />
        </div>
    )

}

export default AllBlogs