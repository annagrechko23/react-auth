import {CREATE_ITEM, DELETE_ITEM, EDIT_ITEM, MARK_ITEM} from "./action";


const todoReducer = (state = {}, action) => {

  switch (action.type) {
    case CREATE_ITEM:
      return [...state, action.payload];
    case DELETE_ITEM:
        state =  state.filter(item =>item.index !== action.payload);
        return state
    case MARK_ITEM:
        state = state.map(item => {
          if(item.index === action.payload){
            item.done = !item.done;
            return item
          } else return item
        });
        return state
    case EDIT_ITEM:
        state = state.map(item => {
          if(item.index === action.payload.id){
            return Object.assign({},item, {"value": action.payload.value});
          } else return item
        });
        return state
    default:
      return state;
  }
};

export default todoReducer;
