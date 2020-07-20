import { BrowserRouter, Route } from "react-router-dom";
import Home from "../container/Home";
import MusicHome from "../container/MusicHome";
import Categories from "../container/Categories";
import CategoryPlaylist from "../container/CategoryPlaylist";
import Search from "../container/Search";
import Library from "../container/Library";
import UserPlaylistTracks from "../container/UserPlaylistTracks";
import CreatePlaylist from "../container/CreatePlaylist";
import RecentlyPlayed from "../container/RecentlyPlayed";
import Footer from "../components/Footer/Footer";
import EditorsPick from "../container/EditorsPick";
import Featured from "../container/Featured";

const Routing = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/musichome" component={MusicHome} />
      <Route path="/category/:id" exact component={Categories} />
      <Route path="/categoryplaylist/:id" exact component={CategoryPlaylist} />
      <Route path="/editors/:id" component={EditorsPick} />
      <Route path="/featured" component={Featured} />
      <Route path="/search" component={Search} />
      <Route path="/library" component={Library} />
      <Route path="/showuserplaylist/:id" component={UserPlaylistTracks} />
      <Route path="/createplaylist" component={CreatePlaylist} />
      <Route path="/recentlyplayed" component={RecentlyPlayed} />
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
