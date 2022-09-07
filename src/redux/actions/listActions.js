import {
  LIST_ADD,
  LIST_DELETE,
  LIST_ADD_DONE,
  LIST_DELETE_DONE
} from '../../constants/ListConstants';

export const addList = (name) => async (dispatch, getState) => {
  dispatch({
    type: LIST_ADD,
    payload: {
      name: name,
      complete: false
    }
  })
  // lưu vào local storage 
  localStorage.setItem('listItems', JSON.stringify(getState().todoItems.todoList))
};

export const deleteList = (name) => async (dispatch, getState) => {
  dispatch({
    type: LIST_DELETE,
    payload: name
  })
  localStorage.setItem('listItems', JSON.stringify(getState().todoItems.todoList))
}

export const addDone = (name) => async (dispatch, getState) => {
  dispatch({
    type: LIST_ADD_DONE,
    payload: {
      name: name,
      complete: true
    }
  })
  localStorage.setItem('listItems', JSON.stringify(getState().todoItems.todoList))
}

export const deleteDone = (name) => async (dispatch, getState) => {
  dispatch({
    type: LIST_DELETE_DONE,
    payload: {
      name: name,
      complete: false
    }
  })
  localStorage.setItem('listItems', JSON.stringify(getState().todoItems.todoList))
}
