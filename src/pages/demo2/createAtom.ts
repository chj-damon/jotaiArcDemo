import { atom } from "jotai";

export default function createAtom<T>(scope: T & Symbol) {
  return atom<T>(scope);
}
