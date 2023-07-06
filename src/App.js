import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navigation from "./components/Navigation";
import AllBlogs from "./pages/AllBlogs";
import ModifyBlog from "./pages/ModifyBlog";
import Container from "./layout/Container";
import BlogsData from "./data/BlogsData";
import BlogArticle from "./components/BlogArticle";

function App() {
  const [blogsData, setBlogsData] = useState(BlogsData)

  const modifyBlogs = (newData) => {
    setBlogsData(newData)
  }
  
  return (
    <Router>
      <Navigation />
        <Container>
          <Routes>
            <Route exact path='/' element={ <AllBlogs blogsData={blogsData} /> } />
            <Route path='/modify-blog' element={ <ModifyBlog blogsData={blogsData} modifyBlogs={modifyBlogs} /> } />
            <Route path="blogs/:id" element={ <BlogArticle blogsData={blogsData} /> } exact />
          </Routes>
        </Container>
    </Router>
  );
}

export default App;