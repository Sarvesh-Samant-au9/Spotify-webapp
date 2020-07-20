import React from 'react' ;
import {connect} from 'react-redux' ;
import {GetPlaylistTracks} from '../action/ActionFile' ;
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar' ;
import DisplayTracks from '../components/CategorySection/DisplayTracks'
import Loaders from '../components/Loader/Loaders'

class CategoryPlaylist extends React.Component{

    componentDidMount = () =>{
        this.props.dispatch(GetPlaylistTracks(this.props.match.params.id))
    }
    
    render(){
        return(
            <>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2" style={{padding:"0px"}}> 
                        <Sidebar />
                    </div>
                    <div className="col-sm-10" style={{marginBottom:"80px"}}>
                        <h3 className="category-heading" >PlayList Tracks</h3>
                        {
                            this.props.playlistTracksWrtCategory?
                            <DisplayTracks tracks={this.props.playlistTracksWrtCategory}/>    
                            :
                            <Loaders/>
                        }
                    </div>
                </div>
            </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        playlistTracksWrtCategory : state.PlaylistReducer.playlistTracksWrtCategory,
    }
}

export default connect(mapStateToProps)(CategoryPlaylist);