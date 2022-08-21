// Coloque aqui suas actions
export const MAKE_LIST = 'MAKE_LIST';
export const EDIT_INPUT = 'EDIT_INPUT';

export const ListAction = (value) => ({
  type: MAKE_LIST,
  value,
});

export const InputAction = (value) => ({
  type: EDIT_INPUT,
  value,
});
