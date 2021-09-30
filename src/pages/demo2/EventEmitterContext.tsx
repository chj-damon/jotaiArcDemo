import { EventEmitter } from 'ahooks/lib/useEventEmitter';
import { createContext, ReactNode } from 'react';

export const EventEmitterContext = createContext<EventEmitter<{ type: string }> | undefined>(
  undefined,
);
export const EventEmitterProvider = ({ children, value }: { children: ReactNode; value: any }) => {
  return <EventEmitterContext.Provider value={value}>{children}</EventEmitterContext.Provider>;
};
