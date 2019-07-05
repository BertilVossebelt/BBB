import CompassActions, {EAST, SOUTH, WEST, NORTH} from "../actions/CompassActions"

const move = (state = {currentTile: 1, lastTile: 1}, action) => {

    switch (action.type) {
        case EAST:
            return (
                {currentTile: action.d}
            );
        case WEST:
            return (
                {currentTile: action.d}
            );
        case NORTH:
            return (
                {currentTile: action.d}
            );
        case SOUTH:
            return (
                {currentTile: action.d}
            );
        default:
            return state
    }
};

export default move
