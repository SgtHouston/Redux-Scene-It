export function search (state = '', action) {
    switch(action.type) {
        case 'SET_SEARCH':
            return action.text
        
        default:
            return state
    }
}