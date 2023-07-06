import ModifyBlogForm from "../components/ModifyBlogForm"

function ModifyBlog( { modifyBlogs } ) {

    return (
        <div>
            <h1>Modify Blog Page</h1>
            <ModifyBlogForm modifyBlogs={modifyBlogs} />
        </div>
    )

}

export default ModifyBlog