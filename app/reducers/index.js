import {combineReducers} from 'redux'
import move from './move';
import {START_OVER} from "../actions/PlayerActions";
import inventoryReducer from './inventoryReducer';
import setEnemyReducer from './setEnemyReducer';

import playerReducer from './playerReducer';

const appReducer = combineReducers({
    move,
    inventoryReducer,
    setEnemyReducer,
    playerReducer,
});

const rootReducer = (state, action) => {
    if (action.type === START_OVER) {
        state = undefined
    }
    return appReducer(state, action)
};

export default rootReducer;
