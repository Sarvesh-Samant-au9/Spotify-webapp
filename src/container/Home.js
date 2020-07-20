import React from 'react' ;
import {connect} from 'react-redux' ;
import {LoginAct, action_track_id} from '../action/ActionFile' ;
import MusicHome from './MusicHome' ;
import LandingPage from '../components/HomeSection/LandingPage';

class Home extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            userAccessInfo : '',
        }
    }

    componentDidMount = () => {
        const uAInfo= this.props.location.hash.substring(1)
        .split("&")
        .reduce((initial, item) => {
          var parts = item.split("=");
          initial[parts[0]] = decodeURIComponent(parts[1]);
    
          return initial;
        }, {});

        window.location.hash = ''
        localStorage.setItem('logintoken',uAInfo.access_token)

        this.setState({
            userAccessInfo : uAInfo
        })

        this.props.dispatch(LoginAct())
        this.props.dispatch(action_track_id(null))
    }

    render(){
        return(
            <div>
                {
                    this.state.userAccessInfo.access_token ?
                    <div>
                        <MusicHome  />
                    </div>
                    :
                    <LandingPage/>
                }
            </div>
        )
    }
}

export default connect()(Home) ;