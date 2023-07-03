import Button from "../shared/Button"
import classes from './ModifyBlogForm.module.css'

function ModifyBlogForm() {

    return (
        <div className={classes.modify_blog}>
            <form id="modify-blog-form">
                <div>
                    <label htmlFor="modify-blog-form-select">Select type of modification</label>
                    <select id="modify-blog-form-select">
                        <option value="create blog">Create blog</option>
                        <option value="update blog">Update blog</option>
                        <option value="delete blog">Delete blog</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="modify-blog-form-image-url">Image URL</label>
                    <input type="url" id="modify-blog-form-image-url" />
                </div>
                <div>
                    <label htmlFor="modify-blog-form-title">Title</label>
                    <input type="text" id="modify-blog-form-image-title" />
                </div>
                <div>
                    <label htmlFor="modify-blog-form-intro">Introductory</label>
                    <textarea id="modify-blog-form-intro"></textarea>
                </div>
                <div>
                    <label htmlFor="modify-blog-form-article">Main Article</label>
                    <textarea id="modify-blog-form-article"></textarea>
                </div>
                <div>
                    <label htmlFor="modify-blog-form-author">Author</label>
                    <input type="text" id="modify-blog-form-author" />
                </div>
                <div>
                    <Button>Submit</Button>
                </div>
            </form>
        </div>
    )

}

export default ModifyBlogForm