import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <>
      <MovieCard movie={{ title: "Tim's Film", release_date: "2024" }} />
      <MovieCard movie={{ title: "Joes Film", release_date: "2024" }} />
    </>
  );
}

export default App;
