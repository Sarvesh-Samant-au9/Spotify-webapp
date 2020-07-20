import React from 'react' ;
import {connect} from 'react-redux' ;
import {Link} from 'react-router-dom' ;
import {GetCategory, GetEditorsPick, GetNewRelease, userPlaylist} from '../action/ActionFile' ;
import Sidebar from '../components/Sidebar/Sidebar' ;
import DisplayEditorsPick from '../components/EditorsPickSection/DisplayEditorsPick'
import DisplayFeatured from '../components/FeaturedSection/DisplayFeatured'
import DisplayCategory from '../components/CategorySection/DisplayCategory'
import Loaders from '../components/Loader/Loaders'
import Header from '../components/Header/Header';

class MusicHome extends React.Component{
    componentDidMount = () => {
        this.props.dispatch(GetCategory())
        this.props.dispatch(GetEditorsPick())
        this.props.dispatch(GetNewRelease())
        this.props.dispatch(userPlaylist())
    }

    renderCategory = (data) => {
        if(data)
        {
            return data.categories.items.map( (item) => {
                return (
                    <div className="category" key={item.id} >
                        <Link to={`/category/${item.id}`} >
                            <img src={item.icons[0].url} className="category-image" alt="categoryImage" />
                            <div className="category-name">{ item.name }</div>
                        </Link>
                    </div>
                )
            } )
        }

    }
    render(){
        return(
            <>
            <Header/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2" style={{padding:"0px"}}> 
                        <Sidebar createdPlaylistData={this.props.uPlaylist}/>
                    </div>
                    <div className="col-sm-10" style={{marginBottom:"80px"}}>
                        {
                            this.props.editorsPick ? 
                            <DisplayEditorsPick editorsData={this.props.editorsPick} />
                            :
                            <Loaders  />
                        }
                        
                        {
                            this.props.categories ?
                            <DisplayCategory categoriesData={this.props.categories} />
                            :
                            <Loaders  />
                        }

                        {
                            this.props.newRelease ?
                            <DisplayFeatured featuredData={this.props.newRelease}  />
                            :
                            <Loaders  />
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
        categories : state.CategoryReducer.categories,
        editorsPick : state.EditorsPickReducer.editorsPick,
        newRelease : state.FeaturedReducer.newRelease,
        uPlaylist : state.UserPlaylistReducer.userPlaylist
    }
}

export default connect(mapStateToProps)(MusicHome);