import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import AllBlogs from "./pages/AllBlogs";
import ModifyBlog from "./pages/ModifyBlog";
import Container from "./layout/Container";

function App() {
  return (
    <Router>
      <Navigation />
        <Container>
          <Routes>
            <Route exact path='/' element={ <AllBlogs /> } />
            <Route path='/modify-blog' element={ <ModifyBlog /> } />
          </Routes>
        </Container>
    </Router>
  );
}

export default App;