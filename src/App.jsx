import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import About from "./About";
import Missing from "./Missing";
import PostPage from "./PostPage";
import Nav from "./Nav";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/post">
            <NewPost />
          </Route>
          <Route exact path="/post/:id">
            <PostPage />
          </Route>
          <Route exact path="/about" component={<About />} />
          <Route exact path="*" component={<Missing />} />
        </Switch>
        <Footer />
      </div>
    </>
  );
}
export default App;
