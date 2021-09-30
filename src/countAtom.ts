import { atomWithReducer } from 'jotai/utils';

const reducer = (state: number, action?: 'INCREASE' | 'DECREASE') => {
  switch (action) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    case undefined:
      return state;
  }
};
export const countAtom = atomWithReducer(0, reducer);
