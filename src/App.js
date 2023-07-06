import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import AllBlogs from "./pages/AllBlogs";
import ModifyBlog from "./pages/ModifyBlog";
import Container from "./layout/Container";
import BlogArticle from "./components/BlogArticle";
import { BlogProvider } from "./context/BlogContext";

function App() {
  
  return (
    <BlogProvider>
      <Router>
        <Navigation />
        <Container>
          <Routes>
            <Route exact path='/' element={ <AllBlogs /> } />
            <Route path='/modify-blog' element={ <ModifyBlog /> } />
            <Route path="blogs/:id" element={ <BlogArticle /> } />
          </Routes>
        </Container>
      </Router>
    </BlogProvider>
  );
}

export default App;