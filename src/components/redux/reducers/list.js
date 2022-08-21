// Esse reducer será responsável por tratar as informações da pessoa usuária
import { MAKE_LIST, EDIT_INPUT } from '../actions';
const INITIAL_STATE = {
    input: {value: '', id: 0},
    list: [],
};

const listReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case MAKE_LIST:
    return {
      ...state,
      list: action.value.list,
    };
    case EDIT_INPUT:
      return {
        ...state,
        input: action.value.input,
      };
  default:
    return state;
  }
};

export default listReducer;
