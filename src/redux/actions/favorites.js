export function actionSaveMovie (movie){
    
    return {
        type: 'SAVE_MOVIE',
        movie: movie
    }
}
//  add a remove button. This is going to require creating 
// and dispatching a new action, and updating the reducer to handle the new action.
// Pass in the movie so we know which is being removed 
export function actionRemoveMovie (movie){
    
    return {
        type: 'REMOVE_MOVIE',
        movie: movie
        
    }
}