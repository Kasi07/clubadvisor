import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartPage from "./components/StartPage";
import SearchPage from "./components/SearchPage";
import ClubPage from "./components/ClubPage";
import EventPage from "./components/EventPage";

function App() {
  return (
    // <StartPage />
    <Router>
      <Routes>
        <Route path="/" Component={StartPage} />
        <Route path="/search" Component={SearchPage} />
        <Route path="/club/:clubid(\d*)" Component={ClubPage} />
        <Route path="/event/:eventid(\d*)" Component={EventPage} />
      </Routes>
    </Router>
  );
}

export default App;
