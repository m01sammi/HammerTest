import { combineReducers } from 'redux';
import Auth from './Auth';
import Theme from './Theme';
import plannerReducer from './planner';
import usersReducer from './users';

const reducers = combineReducers({
    theme: Theme,
    auth: Auth,
    planner: plannerReducer,
    users: usersReducer
});

export default reducers;