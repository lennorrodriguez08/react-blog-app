import ModifyBlogForm from "../components/ModifyBlogForm"

function ModifyBlog( { blogsData, modifyBlogs } ) {

    return (
        <div>
            <h1>Modify Blog Page</h1>
            <ModifyBlogForm blogsData={blogsData} modifyBlogs={modifyBlogs} />
        </div>
    )

}

export default ModifyBlog