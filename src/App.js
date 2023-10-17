import "./styles/style.scss";
import Song from "./components/Song";
import SongPlayer from "./components/SongPlayer";

const App = () => {
  return (
    <div className="App">
      <Song />
      <SongPlayer />
    </div>
  );
};

export default App;
