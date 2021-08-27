

export function favorites (state = [], action) {
    switch (action.type) {
        case 'SAVE_MOVIE':
            // take all the values from the current state, 
            // "spread" (...) them into the new array ([ ]) 
            // and add the new movie that was passed through the 
            // action on the end (action.movie).
            return [ ...state, action.movie ]
            
            // or 
            // return state.movies.concat(action.movie)
        
        case 'REMOVE_MOVIE':
            return state.filter(movie => movie.imdbID !== action.movie.imdbID)
            
        
        default:
            return state
    }
}