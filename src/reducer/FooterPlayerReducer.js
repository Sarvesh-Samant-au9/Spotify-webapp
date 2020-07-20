const FooterPlayerReducer = (state={} , action) => {
    switch(action.type)
    {
        case 'SET_TRACK_ID' :
            return{
                ...state, reducer_track_id : action.payload
            }

        default:
            return state
    }
}

export default FooterPlayerReducer;