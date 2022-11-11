import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/header/Header";
import Blocks from "./components/blocks/Blocks";
import Slider from "./components/slider/Slider";
import Score from "./components/scoreBlock/scoreBlock";
import Post from "./components/post/Post";
import { useSelector } from "react-redux";
function App() {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <div>
      <Header></Header>
      <div className="root">
        <div className="spacer"></div>
        <div className="App">
          <div className="score">
            <Score></Score>
          </div>
          <div className="container">
            <div className="left-side">
              <Blocks />
              <Slider></Slider>
              {posts.data.map((post, index) => (
                <Post
                  key={index}
                  imgSrc={post.imgSrc}
                  headerText={post.headerText}
                  Text={post.Text}
                  FullText={post.FullText}
                ></Post>
              ))}
            </div>
            <aside className="right-side"></aside>
          </div>
        </div>
        <div className="spacer"></div>
      </div>
    </div>
  );
}

export default App;
