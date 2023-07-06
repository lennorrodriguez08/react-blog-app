import { createContext, useState } from "react";
import BlogsData from "../data/BlogsData";

const BlogContext = createContext()

export const BlogProvider = ( { children } ) => {

    const [blogsData, setBlogsData] = useState(BlogsData)

    const modifyBlogs = (newData) => {
        setBlogsData(newData)
    }

    return (
        <BlogContext.Provider value={{
            blogsData : blogsData,
            modifyBlogs: modifyBlogs
        }}>
            { children }
        </BlogContext.Provider>
    )

}

export default BlogContext