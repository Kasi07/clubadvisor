import { BrowserRouter as Router, Route } from "react-router-dom";
import StartPage from "./components/StartPage";
import SearchPage from "./components/SearchPage";
import ClubPage from "./components/ClubPage";
import EventPage from "./components/EventPage";

function App() {
  return (
    <StartPage />
    // <Router>
    //   <Route path="/" Component={StartPage} />
    //   <Route path="/search" Component={SearchPage} />
    //   <Route path="/club/:clubid(\d*)" Component={ClubPage} />
    //   <Route path="/event/:eventid(\d*)" Component={EventPage} />
    // </Router>
  );
}

export default App;
