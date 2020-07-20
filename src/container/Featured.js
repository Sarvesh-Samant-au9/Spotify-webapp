import React from 'react' ;
import Sidebar from '../components/Sidebar/Sidebar' ;
import {GetFeatured, GetFeaturedTracks, action_track_id } from '../action/ActionFile' ;
import {connect} from 'react-redux' ;
import DisplayRelease from '../components/FeaturedSection/DisplayRelease' ;
import Header from '../components/Header/Header';

class Featured extends React.Component{

    componentDidMount = () => {
        this.props.dispatch(GetFeatured())
    }

    handleReleaseTrack = (id) => {
        this.props.dispatch(GetFeaturedTracks(id))
    }

    passingTrackIdToAction=()=>{
        this.props.dispatch(action_track_id(this.props.featuredTrack.items[0].id))
    }
    render(){
        return(
            <>
            <Header/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3" style={{padding:"0px"}}> 
                        <Sidebar />
                    </div>
                    <div className="col-md-9" style={{marginBottom:"80px"}}>
                        <DisplayRelease releaseData={this.props.featuredItem}  handleId={ (id) => this.handleReleaseTrack(id) } />
                        
                        {
                            this.props.featuredTrack ? 
                            this.passingTrackIdToAction()
                            : 
                            null
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
        featuredItem : state.FeaturedReducer.featuredItem,
        featuredTrack : state.FeaturedReducer.featuredTrack
    }
}

export default connect(mapStateToProps)(Featured);