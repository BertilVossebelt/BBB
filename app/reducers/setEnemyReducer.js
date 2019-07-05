
import EnemyActions, {SET_ENEMY, CHECK_HEALTH} from "../actions/EnemyActions"
import PlayerActions, {ATTACK} from "../actions/PlayerActions"


const setEnemyReducer = (state = {enemy: false, enemyHealth: 100, oldEnemyHealth: 100}, action) => {
    switch (action.type) {
        //Based on the calculations in the component map the reducer received true or false.
        case SET_ENEMY:
            return (
                {enemy: action.enemy, enemyHealth: 100, oldEnemyHealth: 100}
            );

        case ATTACK:
            return (
                {enemyHealth: action.attackDmg, enemy: state.enemy, oldEnemyHealth: state.oldEnemyHealth}
        );
        case CHECK_HEALTH:
            return (
                {oldEnemyHealth: action.oldEnemyHealth, enemy: state.enemy, enemyHealth: action.attackDmg}
            );

        default:
            return state
    }
};

export default setEnemyReducer;