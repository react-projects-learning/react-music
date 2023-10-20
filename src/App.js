import "./styles/style.scss";
import Song from "./components/Song";
import SongPlayer from "./components/SongPlayer";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <div className="App">
      <Song />
      <SongPlayer />
      <SideBar />
    </div>
  );
};

export default App;
