import Song from "./components/Song";
import SongPlayer from "./components/SongPlayer";
import "./styles/style.scss";

function App() {
  return (
    <div className="App">
      <Song />
      <SongPlayer />
    </div>
  );
}

export default App;
