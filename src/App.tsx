import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import NewMeetups from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";
function App() {
  return (
    <Router>
      <MainNavigation />
        <Routes>
          <Route path="/" element={ <AllMeetups />}/>
          <Route path="/new-meetups" element={<NewMeetups />}/>
          <Route path="/favorites" element={<FavoritesPage />}/>
          
        </Routes>
    </Router>
  );
}

export default App;
