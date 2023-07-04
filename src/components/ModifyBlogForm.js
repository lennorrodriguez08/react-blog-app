import { useState } from "react"
import Button from "../shared/Button"
import classes from './ModifyBlogForm.module.css'

function ModifyBlogForm({ blogsData, addBlog }) {

    const [selectIsDisbladed, setSelectIsDisbladed] = useState(false)
    const [selectModifyBlog, setSelectModifyBlog] = useState(['Create blog', 'Update blog', 'Delete blog'])
    const [imageUrl, setImageUrl] = useState('https://placehold.co/1200x630')
    const [title, setTitle] = useState('')
    const [intro, setIntro] = useState('')
    const [mainArticle, setMainArticle] = useState('')
    const [author, setAuthor] = useState('')
    const [submitMessage, setSubmitMessage] = useState('')

    const selectHandler = (e) => {
        let selectCurrentValue = e.currentTarget.value
        setSelectModifyBlog([selectCurrentValue])
        setSelectIsDisbladed(true)
    }

    const imageUrlHandler = (e) => {
        setImageUrl(e.currentTarget.value)
    }

    const titlelHandler = (e) => {
        setTitle(e.currentTarget.value)
    }

    const introHandler = (e) => {
        setIntro(e.currentTarget.value) 
    }

    const mainArticleHandler = (e) => {
        setMainArticle(e.currentTarget.value)
    }

    const authorHandler = (e) => {
        setAuthor(e.currentTarget.value)
    }

    const splitIntroWords = intro.split(' ')
    let introWarning;
    if (splitIntroWords.length <= 50) {
        introWarning = '*Intro must be minimum of 50 words'
    }   else {
        introWarning = ''
    }

    const splitMainArticleWords = mainArticle.split(' ')
    let mainArticleWarning;
    if (splitMainArticleWords.length <= 200) {
        mainArticleWarning = '*Article must be minimum of 200 words'
    }   else {
        mainArticleWarning = ''
    }

    var handleSubmit = (e) => {
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
        
        const newBlog = {
            id,
            image_url: imageUrl,
            title,
            introductory: intro,
            article: mainArticle,
            author,
            date_posted: `${month} ${day}, ${year}`
        }

        addBlog([...blogsData, newBlog])

        setSelectModifyBlog(['Create blog', 'Update blog', 'Delete blog'])
        setSelectIsDisbladed(false)
        setTitle('')
        setIntro('')
        setMainArticle('')
        setAuthor('')
        setSubmitMessage('New blog has been posted')
        showHideSubmitMessage()
        document.querySelector('#unique_one').style.display = 'block'
        
    }

    function showHideSubmitMessage() {
        setTimeout(function() {
            document.querySelector('#unique_one').style.display = 'none'
        }, 5000)
    }

    return (
        <div className={classes.modify_blog}>
            <form onSubmit={handleSubmit} id="modify-blog-form">
                <div>
                    <label htmlFor="modify-blog-form-select">Select type of modification</label>
                    <select disabled={selectIsDisbladed} onChange={selectHandler} id="modify-blog-form-select">
                        { selectModifyBlog.map(select => <option value={select}>{select}</option>) }
                    </select>
                </div>
                <div>
                    <label htmlFor="modify-blog-form-image-url">Image URL</label>
                    <input type="url" id="modify-blog-form-image-url" required value={imageUrl} onChange={imageUrlHandler} />
                </div>
                <div>
                    <label htmlFor="modify-blog-form-title">Title</label>
                    <input type="text" id="modify-blog-form-image-title" required value={title} onChange={titlelHandler} />
                </div>
                <div>
                    <label htmlFor="modify-blog-form-intro">Introductory</label>
                    <textarea id="modify-blog-form-intro" value={intro} required onChange={introHandler}></textarea>
                    { <p className='pt_5 helper_text red'>{ introWarning }</p> }
                </div>
                <div>
                    <label htmlFor="modify-blog-form-article">Main Article</label>
                    <textarea id="modify-blog-form-article" value={mainArticle} required onChange={mainArticleHandler}></textarea>
                    { <p className='pt_5 helper_text red'> { mainArticleWarning } </p> }
                </div>
                <div>
                    <label htmlFor="modify-blog-form-author">Author</label>
                    <input type="text" id="modify-blog-form-author" required value={author} onChange={authorHandler} />
                </div>
                <div>
                    <p id="unique_one" className="pt_5 green strong">{ submitMessage }</p>
                </div>
                <div>
                    <Button>Submit</Button>
                </div>
            </form>
        </div>
    )

}

export default ModifyBlogForm