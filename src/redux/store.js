import { createStore, combineReducers } from "redux";
import { favorites} from "./reducers/favorites";
import { search } from './reducers/search'
import { results } from './reducers/results'



// combines all existing reducers into a larger object
const rootReducer = combineReducers({
    movies: favorites,
    search,
    results
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


