import ModifyBlogForm from "../components/ModifyBlogForm"

function ModifyBlog( { blogsData, addBlog } ) {

    return (
        <div>
            <h1>Modify Blog Page</h1>
            <ModifyBlogForm blogsData={blogsData} addBlog={addBlog} />
        </div>
    )

}

export default ModifyBlog