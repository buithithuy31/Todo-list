import { LIST_ADD, LIST_DELETE, LIST_ADD_DONE, LIST_DELETE_DONE } from '../../constants/ListConstants';

export const listReducer = (state = { todoList: [], repeat: false }, action) => { //repeat khi dữ liệu nhập vào mà giống thì nó chuyển sang true sẽ báo lỗi
  switch (action.type) {
    case LIST_ADD:
      const newList = action.payload;
      const checkName = state.todoList.find(x => x.name === action.payload.name)// check xem dữ liệu nhập vào có bị trùng với data hay không
      // console.log(checkName)
      if(!checkName) { //ko có trùng thì return
        return {
          ...state, // giữ nguyên tất cả mọi thứ từ trước
          repeat: false,
          todoList: [...state.todoList, newList], // giữ nguyên rồi add thêm newList mới vô
        };
      } else {
        return {
          ...state,
          repeat: true
        }
      }

    case LIST_DELETE:
      return {
        ...state,
        todoList: state.todoList.filter((x) => x.name !== action.payload), //remove 
      };

    case LIST_ADD_DONE:
      const existNote = state.todoList.find(x => x.name === action.payload.name) 
      return {
        ...state,
        todoList: state.todoList.map((x) => x.name === existNote.name ? action.payload : x) //todoList.complete: true // ngược lại nó giữ nguyên
      };
    case LIST_DELETE_DONE:
      const uncompleteNote = state.todoList.find(x => x.name === action.payload.name)
      return {
        ...state,
        todoList: state.todoList.map((x) => x.name === uncompleteNote.name ? action.payload : x) //replace that todoList.complete to true
      }
    default:
      return state;
  }
};
