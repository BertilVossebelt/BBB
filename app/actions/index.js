import {EAST, NORTH, SOUTH, WEST} from "./CompassActions";
import {ADD_ITEM, MOUNT_WEAPON, SET_DMG, REMOVE_ITEM} from "./InventoryActions";
import {SET_ENEMY, ENEMY_ATTACK} from "./EnemyActions";
import {ATTACK, GAME_OVER, START_OVER, ADD_HEALTH, PAY, RECEIVE} from "./PlayerActions";

export const moveNorth = (d) => ({
    type: NORTH,
    d
});
export const moveEast = (d) => ({
    type: EAST,
    d
});
export const moveWest = (d) => ({
    type: WEST,
    d
});
export const moveSouth = (d) => ({
    type: SOUTH,
    d
});
export const addItem = (item) => ({
    type: ADD_ITEM,
    item
});
export const removeItem = (newInventory) => ({
    type: REMOVE_ITEM,
    newInventory
});
export const setEnemy = (enemy) => ({
    type: SET_ENEMY,
    enemy
});
export const mountWeapon = (weapon) => ({
    type: MOUNT_WEAPON,
    weapon
});
export const weaponDmg = (dmg) => ({
    type: SET_DMG,
    dmg
});
export const attack = (attackDmg) => ({
    type: ATTACK,
    attackDmg
});
export const enemyAttack = (enemyDmg) => ({
    type: ENEMY_ATTACK,
    enemyDmg
});
export const addHealth = (health) => ({
    type: ADD_HEALTH,
    health
});
export const gameOver = (game) => ({
    type: GAME_OVER,
    game
});
export const startOver = () => ({
    type: START_OVER,
});
export const pay = (amount) => ({
    type: PAY,
    amount
});
export const receive = (payment) => ({
    type: RECEIVE,
    payment
});

