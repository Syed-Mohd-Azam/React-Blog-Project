import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import About from "./About";
import Missing from "./Missing";
import PostPage from "./PostPage";
import Nav from "./Nav";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";
function App() {
  const history = useHistory();
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2011 11:17:36 AM",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 2,
      title: "My Second Post",
      datetime: "July 01,2021 11:17:35 PM",
      body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
    },
    {
      id: 3,
      title: "My Third Post",
      datetime: "July 25, 2022 10:15 :23 AM",
      body: "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "Aug 26, 2019 7:14:23 AM",
      body: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from  by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    },
  ]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleDelete = (id) => {
    const postList = posts.filter((post) => post.id !== id);
    setPosts(postList);
    history.push("/");
  };
  return (
    <>
      <div className="app">
        <Header title="React JS Blog" />
        <Nav search={search} setSearch={setSearch} />
        <Switch>
          <Route exact path="/">
            <Home posts={posts} />
          </Route>
          <Route exact path="/post">
            <NewPost />
          </Route>
          <Route exact path="/post/:id">
            <PostPage posts={posts} handledelete={handleDelete} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="*">
            <Missing />
          </Route>
        </Switch>
        <Footer />
      </div>
    </>
  );
}
export default App;
