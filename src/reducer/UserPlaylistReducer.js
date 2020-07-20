const UserPlaylistReducer = (state={} , action) => {
    switch(action.type)
    {
        case 'USER_PLAYLIST' :
            return{
                ...state, userPlaylist : action.payload
            }
            
        default:
            return state
    }
}

export default UserPlaylistReducer;