import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navigation from "./components/Navigation";
import AllBlogs from "./pages/AllBlogs";
import ModifyBlog from "./pages/ModifyBlog";
import Container from "./layout/Container";
import BlogsData from "./data/BlogsData";

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
          </Routes>
        </Container>
    </Router>
  );
}

export default App;