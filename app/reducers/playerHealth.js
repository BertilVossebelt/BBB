import {DMG} from "../actions/PlayerAction";

const playerHealth = (state = {playerHealth: 100}, action) => {
    switch (action.type) {
        //Reduces the HP level of the player
        case DMG:
            return(
                {playerHealth: action.type}
            );
        default:
            return state
    }
};
export default playerHealth;