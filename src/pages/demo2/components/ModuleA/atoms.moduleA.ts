import { atom } from 'jotai';

export const scope = Symbol('moduleA');

export const countAtom = atom<number | Symbol>(scope);
