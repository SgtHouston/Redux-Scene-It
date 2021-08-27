export function results (state = [], action) {
    switch(action.type) {
        case 'SET_RESULTS':
            return action.array
        
        default:
            return state
    }
}