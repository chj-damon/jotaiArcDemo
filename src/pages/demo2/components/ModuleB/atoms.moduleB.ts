import { atom } from 'jotai';

export const scope = Symbol('moduleB');

export const todoAtom = atom<{name: string}[] | Symbol>(scope);
