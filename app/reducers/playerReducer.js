import {ENEMY_ATTACK} from "../actions/EnemyActions";
import {ADD_HEALTH, PAY, RECEIVE, GAME_OVER} from "../actions/PlayerActions";

const playerReducer = (state = {playerHealth: 100, coins: 5, gameOver: false}, action) => {
    switch (action.type) {
        case ENEMY_ATTACK:
            return (
                {playerHealth: action.enemyDmg, coins: state.coins, gameOver: state.gameOver}
            );
        case ADD_HEALTH:
            return (
                {playerHealth: action.health, coins: state.coins, gameOver: state.gameOver}
            );
        case PAY:
            return (
                {coins: action.amount, playerHealth: state.playerHealth, gameOver: state.gameOver}
            );
        case RECEIVE:
            return (
                {coins: action.payment, playerHealth: state.playerHealth, gameOver: state.gameOver}
            );
        case GAME_OVER:
            return (
                {gameOver: action.game, coins: action.payment, playerHealth: state.playerHealth}
            );
        default:
            return state
    }
};
export default playerReducer;