import React from 'react' ;
import Sidebar from '../components/Sidebar/Sidebar' ;
import {GetPlaylistTracks, userPlaylist} from '../action/ActionFile' ;
import {connect} from 'react-redux' ;
import DisplayTracks from '../components/CategorySection/DisplayTracks'
import Header from '../components/Header/Header';


class UserPlaylistTracks extends React.Component{
    componentDidMount = () => {
        this.props.dispatch(userPlaylist())
        this.props.dispatch(GetPlaylistTracks(this.props.match.params.id))
    }

    render(){
        return(
            <>
            <Header/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2" style={{padding:"0px"}}> 
                        <div className="sideBarContainer" >
                            <Sidebar /> 
                        </div>
                    </div>
                    <div className="col-sm-10">
                        <DisplayTracks tracks={this.props.playlistTracksWrtCategory}/>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        seeUserCreatedPlaylist : state.UserPlaylistReducer.userPlaylist,
        playlistTracksWrtCategory : state.PlaylistReducer.playlistTracksWrtCategory
    }
}

export default connect(mapStateToProps)(UserPlaylistTracks) ;