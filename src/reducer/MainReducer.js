import {combineReducers} from 'redux' ;
import LoginReducer from './LoginReducer' ;
import CategoryReducer from './CategoryReducer' ;
import PlaylistReducer from './PlaylistReducer' ;
import SearchReducer from './SearchReducer'
import UserPlaylistReducer from './UserPlaylistReducer';
import RecentlyPlayed from './RecentlyPlayedReducer';
import FooterPlayerReducer from './FooterPlayerReducer'
import EditorsPickReducer from './EditorsPickReducer'
import FeaturedReducer from './FeaturedReducer'

const MainReducer = combineReducers({

    LoginReducer,
    CategoryReducer,
    PlaylistReducer,
    SearchReducer,
    UserPlaylistReducer,
    RecentlyPlayed,
    FooterPlayerReducer,
    EditorsPickReducer,
    FeaturedReducer,
    
})

export default MainReducer;