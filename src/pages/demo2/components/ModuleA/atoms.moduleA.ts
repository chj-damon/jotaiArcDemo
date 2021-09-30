import { atom } from 'jotai';

export const scope = Symbol('moduleA');

export const countAtom = atom(scope);

console.log(countAtom.debugLabel); // won't be countAtom, but atom4. why?
