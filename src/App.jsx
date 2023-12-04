import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import About from "./About";
import Missing from "./Missing";
import PostPage from "./PostPage";
import Nav from "./Nav";
function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Nav />
        <Home />
        <NewPost />
        <PostPage />
        <About />
        <Missing />
        <Footer />
      </div>
    </>
  );
}
export default App;
