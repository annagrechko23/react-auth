export const CREATE_ITEM = 'CREATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const MARK_ITEM = 'MARK_ITEM';

// actions

export const createItem = (items, value) => {
 return  {
    type: CREATE_ITEM,
    payload:{
      "index": items + 1,
      value,
      "done": false,
    },
  }
  
  
};

export const deleteItem = id => ({
  type: DELETE_ITEM,
  payload: id
});
export const markItem = id => ({
  type: MARK_ITEM,
  payload: id
});
export const editItem = (id, value) => ({
  type: EDIT_ITEM,
  payload: ({id, value}),
});

