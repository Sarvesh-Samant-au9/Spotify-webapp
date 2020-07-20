import React from 'react' ;
import Sidebar from '../components/Sidebar/Sidebar' ;
import {connect} from 'react-redux' ;
import {GetSearchResult} from '../action/ActionFile' ;
import DisplaySearchTrack from '../components/CategorySection/DisplaySearchTrack';
import TextField from '@material-ui/core/TextField';
import './search.css'
import Loaders from '../components/Loader/Loaders'
import Header from '../components/Header/Header';

class Search extends React.Component{

    constructor(props)
    {
        super(props)

        this.state = {
            userInput : ""
        }
    }

    handleInput = (event) => {
        this.setState({
            userInput : event.target.value
        })
    }

    handleSearch = () => {
        if(this.state.userInput)
        {
            this.props.dispatch(GetSearchResult(this.state.userInput))
        }
    }

    render(){
        return(
            <>
            <Header/>
            <div className="row">
                <div className="col-md-2"> 
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <div id="search_area" className="col-md-6">
                        <form className="classes.root" noValidate autoComplete="off">
                            <TextField onChange={this.handleInput} id="standard-basic" label="search songs" />
                        </form>
                        <button type="submit" className="btn btn-outline-secondary"onClick={this.handleSearch}>search</button>
                    </div>
                    {
                        this.props.searchedItem ?
                        <DisplaySearchTrack tracks={this.props.searchedItem}/>
                        : <Loaders/>
                    }
                </div>
            </div>
            </>  
        )
    }
}

const mapStateToProps = (state) => {
    return{
        searchedItem : state.SearchReducer.searchedItem
    }
}

export default connect(mapStateToProps)(Search);