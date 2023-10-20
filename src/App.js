import "./styles/style.scss";
import Song from "./components/Song";
import SongPlayer from "./components/SongPlayer";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import { useState } from "react";

const App = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSideBarHandler = () => {
    setIsSideBarOpen((x) => !x);
  };

  return (
    <div className={`App ${isSideBarOpen ? "App__shift-right" : ""}`}>
      <NavBar toggleSideBarHandler={toggleSideBarHandler} />
      <Song />
      <SongPlayer />
      <SideBar
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
    </div>
  );
};

export default App;
