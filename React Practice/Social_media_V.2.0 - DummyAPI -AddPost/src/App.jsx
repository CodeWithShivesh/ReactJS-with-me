import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import Footer from "./Components/Footer";
import PostList from "./Components/PostList";
import CreatePost from "./Components/CreatePost";
import { useState } from "react";
import PostListProvider from "./Store/Post-List-Store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <>
        <div className="App-container">
          <SideBar
            tabSelected={selectedTab}
            selected={setSelectedTab}
          ></SideBar>
          <div className="content">
            <Header></Header>
            {selectedTab === "Home" ? (
              <PostList></PostList>
            ) : (
              <CreatePost></CreatePost>
            )}
            <Footer></Footer>
          </div>
        </div>
      </>
    </PostListProvider>
  );
}

export default App;
