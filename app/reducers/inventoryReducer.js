import InventoryActions, {ADD_ITEM, MOUNT_WEAPON, SET_DMG, REMOVE_ITEM} from "../actions/InventoryActions";

const inventoryReducer = (state = {items: [], weapon: 'Bare Hands', dmg: 1}, action) => {
    switch (action.type) {
        //Adds an item to the inventory array.
        case ADD_ITEM:
            return (
                {items: [...state.items, action.item], weapon: state.weapon, dmg: state.dmg}
            );
        case REMOVE_ITEM:
            return (
                {items: action.newInventory, weapon: state.weapon, dmg: state.dmg}
            );
        //Mounts a weapon from the inventory in the store(now its just a array).
        case MOUNT_WEAPON:
            return (
                {items: state.items, weapon: action.weapon, dmg: state.dmg}
            );
        case SET_DMG:
            return (
                {items: state.items, weapon: state.weapon, dmg: action.dmg}
            );
        default:
            return state
    }
};

export default inventoryReducer;