import { useState } from "react"
import Button from "../shared/Button"
import classes from './ModifyBlogForm.module.css'

function ModifyBlogForm({ blogsData, modifyBlogs }) {

    const [checkModification, setCheckModification] = useState('Create blog')
    const [imageUrl, setImageUrl] = useState('')
    const [title, setTitle] = useState('')
    const [intro, setIntro] = useState('')
    const [mainArticle, setMainArticle] = useState('')
    const [author, setAuthor] = useState('')
    const [submitMessage, setSubmitMessage] = useState('')
    const [splitIntroWords, setSplitIntroWords] = useState('')
    const [splitMainArticleWords, setSplitMainArticleWords] = useState('')
    const [introWarning, setIntroWarning] = useState('*Intro must be minimum of 50 words')
    const [mainArticleWarning, setMainArticleWarning] = useState('*Article must be minimum of 200 words')

    const [editModeId, setEditModeId] = useState(' ')
    const [editModeImageUrl, setEditModeImageUrl]= useState('')
    const [editModeTitle, setEditModeTitle]= useState('')
    const [editModeIntro, setEditModeIntro]= useState('')
    const [editModeMainArticle, setEditModeMainArticle]= useState('')
    const [editModeAuthor, setEditModeAuthor]= useState('')

    const imageUrlHandler = (e) => {
        setImageUrl(e.currentTarget.value)
    }

    const titlelHandler = (e) => {
        setTitle(e.currentTarget.value)
    }

    const introHandler = (e) => {
        setIntro(e.currentTarget.value) 
        setSplitIntroWords(e.currentTarget.value.split(' '))
    }

    const editIntroHandler = (e) => {
        setEditModeIntro(e.currentTarget.value)
        setSplitIntroWords(e.currentTarget.value.split(' '))
    }

    const editMainArticleHandler = (e) => {
        setEditModeMainArticle(e.currentTarget.value)
        setSplitMainArticleWords(e.currentTarget.value.split(' '))
    }

    const mainArticleHandler = (e) => {
        setMainArticle(e.currentTarget.value)
        setSplitMainArticleWords(e.currentTarget.value.split(' '))
    }

    const authorHandler = (e) => {
        setAuthor(e.currentTarget.value)
    }

    const editModeIdHandler = (e) => {

        setEditModeId(Number(e.currentTarget.value))
        setEditModeImageUrl(blogsData.filter(item => ( item.id === Number(e.currentTarget.value)))[0].image_url)
        setEditModeTitle(blogsData.filter(item => ( item.id === Number(e.currentTarget.value)))[0].title)
        setEditModeIntro(blogsData.filter(item => ( item.id === Number(e.currentTarget.value)))[0].introductory)
        setEditModeMainArticle(blogsData.filter(item => ( item.id === Number(e.currentTarget.value)))[0].article)
        setEditModeAuthor(blogsData.filter(item => ( item.id === Number(e.currentTarget.value)))[0].author)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const date = new Date()
        const year = date.getFullYear()
        let month = date.getMonth() + 1
        const day = date.getDate()
        const id = date.getTime()

        switch(month) {
            case 1:
                month = 'January'
                break;
            case 2:
                month = 'February'
                break;
            case 3:
                month = 'March'
                break;    
            case 4:
                month = 'April'
                break;
            case 5:
                month = 'May'
                break;
            case 6:
                month = 'June'
                break;    
            case 7:
                month = 'July'
                break;
            case 8:
                month = 'August'
                break;
            case 9:
                month = 'September'
                break;    
            case 10:
                month = 'October'
                break;
            case 11:
                month = 'November'
                break;
            case 12:
                month = 'December'
                break;    
        }
        
        if (checkModification === 'Create blog') {
            
            const newBlog = {
                id: id,
                image_url: imageUrl,
                title,
                introductory: intro,
                article: mainArticle,
                author,
                date_posted: `${month} ${day}, ${year}`
            }

            modifyBlogs([...blogsData, newBlog])
            setSubmitMessage('New blog has been posted')

        }   else if (checkModification === 'Update blog') {

            const newBlog = {
                id: editModeId,
                image_url: editModeImageUrl,
                title: editModeTitle,
                introductory: editModeIntro,
                article: editModeMainArticle,
                author: editModeAuthor,
                date_posted: `${month} ${day}, ${year}`
            }

            const updatedBlog = blogsData.filter(blog => ( blog.id !== editModeId ))
            
            modifyBlogs([...updatedBlog, newBlog])
            setSubmitMessage('Blog has been updated')
        }   else if (checkModification === 'Delete blog') {

            const confirmed = window.confirm('Warning: You are about to delete a blog.\nPlease click "OK" to confirm')
           
                if (confirmed) {
                    modifyBlogs(blogsData.filter((blog) => (blog.id !== editModeId)))
                    setSubmitMessage('Blog has been deleted')
                }
            
                setEditModeImageUrl('')
                setEditModeTitle('')
                setEditModeIntro('')
                setEditModeMainArticle('')
                setEditModeAuthor('')
        }

        setEditModeId(0)
        setImageUrl('')
        setTitle('')
        setIntro('')
        setMainArticle('')
        setAuthor('')
        showHideSubmitMessage()
        document.querySelector('#unique_one').style.display = 'block'
        
    }

    function showHideSubmitMessage() {
        setTimeout(function() {
            document.querySelector('#unique_one').style.display = 'none'
        }, 3000)
    }

    const selectModification = (e) => {
        setCheckModification(e.currentTarget.value)

        if (e.currentTarget.value === 'Create blog') {
            setEditModeId(' ')
            setEditModeImageUrl('')
            setEditModeTitle('')
            setEditModeIntro('')
            setEditModeMainArticle('')
            setEditModeAuthor('')
            setIntroWarning('*Intro must be minimum of 50 words')
            setMainArticleWarning('*Article must be minimum of 200 words')
            
        }   else if (e.currentTarget.value === 'Update blog') {
            setImageUrl('')
            setTitle('')
            setIntro('')
            setMainArticle('')
            setAuthor('')
            setIntroWarning('*Intro must be minimum of 50 words')
            setMainArticleWarning('*Article must be minimum of 200 words')

        }   else if (e.currentTarget.value === 'Delete blog') {
            setIntroWarning('')
            setMainArticleWarning('')
            setImageUrl('')
            setTitle('')
            setIntro('')
            setMainArticle('')
            setAuthor('')
        }
    }

    return (
        <div className={classes.modify_blog}>
            <form onSubmit={handleSubmit} id="modify-blog-form">
                <p className="pt_10 pb_5">Select type of modification</p>
                <div className={classes.form_group_radio}>
                    {
                        ['Create blog', 'Update blog', 'Delete blog'].map((item, index) => {
                            return (
                                <div key={index}>
                                    <input type="radio" checked={ checkModification === item } id={item.replace(' ', '_').toLowerCase()} name="modification" onChange={ selectModification } value={ item } />
                                    <label htmlFor={item.trim().replace(' ', '_').toLowerCase()}>{ item }</label>
                                </div>
                            )
                        })
                    }
                   
                </div>
                { ((checkModification === 'Update blog') || (checkModification === 'Delete blog')) && (
                    <div>
                        <p className="pt_10 pb_10">Select Blog ID</p>
                        <select onChange={editModeIdHandler}>
                        { blogsData.map(blog => <option value={blog.id}>{blog.id}</option>) }
                        </select>
                    </div>
                ) }
                <div>
                    <label htmlFor="modify-blog-form-image-url">Image URL</label>
                   { checkModification === 'Create blog' && (
                    <input type="url" id="modify-blog-form-image-url" required value={imageUrl} onChange={imageUrlHandler} />
                   ) }
                   { ((checkModification === 'Update blog') || (checkModification === 'Delete blog')) && (
                    <input type="url" id="modify-blog-form-image-url" disabled={checkModification === 'Delete blog'} required value={editModeImageUrl} onChange={(e) => setEditModeImageUrl(e.currentTarget.value)} />
                   ) }
                </div>
                <div>
                    <label htmlFor="modify-blog-form-title">Title</label>
                    { checkModification === 'Create blog' && (
                        <input type="text" id="modify-blog-form-image-title" required value={title} onChange={titlelHandler} />

                    ) }
                    { ((checkModification === 'Update blog') || (checkModification === 'Delete blog')) && (
                        <input type="text" id="modify-blog-form-image-title" disabled={checkModification === 'Delete blog'} required value={editModeTitle} onChange={(e) => setEditModeTitle(e.currentTarget.value)} />

                    ) }
                </div>
                <div>
                    <label htmlFor="modify-blog-form-intro">Introductory</label>
                    { checkModification === 'Create blog' && (
                        <textarea className={classes.modify_blog_form_intro} value={intro} required onChange={introHandler}></textarea>

                    ) }
                    { ((checkModification === 'Update blog') || (checkModification === 'Delete blog')) && (
                        <textarea className={classes.modify_blog_form_intro} value={editModeIntro} disabled={checkModification === 'Delete blog'} required onChange={editIntroHandler}></textarea>

                    ) }
                    { <p className='pt_5 helper_text red'>{ splitIntroWords.length <= 50 && introWarning }</p> }
                </div>
                <div>
                    <label htmlFor="modify-blog-form-article">Main Article</label>
                    { checkModification === 'Create blog' && (
                        <textarea className={classes.modify_blog_form_article} value={mainArticle} required onChange={mainArticleHandler}></textarea>
                    ) }
                    { ((checkModification === 'Update blog') || (checkModification === 'Delete blog')) && (
                        <textarea className={classes.modify_blog_form_article} value={editModeMainArticle} disabled={checkModification === 'Delete blog'} required onChange={editMainArticleHandler}></textarea>
                    ) }
                    { <p className='pt_5 helper_text red'> { splitMainArticleWords.length <= 200 && mainArticleWarning } </p> }
                </div>
                <div>
                    <label htmlFor="modify-blog-form-author">Author</label>
                    { checkModification === 'Create blog' && (
                        <input type="text" id="modify-blog-form-author" required value={author} onChange={authorHandler} />
                    ) }
                    { ((checkModification === 'Update blog') || (checkModification === 'Delete blog')) && (
                        <input type="text" id="modify-blog-form-author" disabled={checkModification === 'Delete blog'} required value={editModeAuthor} onChange={(e) => setEditModeAuthor(e.currentTarget.value)} />
                    ) }
                </div>
                <div>
                    <p id="unique_one" className="pt_5 green strong">{ submitMessage }</p>
                </div>
                <div className="pt_10 pb_10">
                    <Button>Submit</Button>
                </div>
            </form>
        </div>
    )
}

export default ModifyBlogForm