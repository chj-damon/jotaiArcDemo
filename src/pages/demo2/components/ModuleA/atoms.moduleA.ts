import { atom } from 'jotai';

export const scope = Symbol('moduleA');

export const countAtom = atom(scope);
