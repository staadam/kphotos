import React, { useState, createContext, ReactNode } from 'react';
import { config } from '../../constants/alert';

type alerts = Array<{ text: string; id: string }>;

export interface IAlertContext {
  alerts: alerts;
  dispatchAlerts: (value: string) => void;
}

export const AlertContext = createContext<IAlertContext | {}>({});

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [alerts, setAlerts] = useState<alerts>([]);

  const dispatchAlerts = (value: string) => {
    setAlerts((prevState) => [...prevState, { text: value, id: String(Math.random()) }]);

    setTimeout(() => {
      setAlerts((prevState) => [...prevState].slice(1));
    }, config.alertTime);
  };

  return <AlertContext.Provider value={{ alerts, dispatchAlerts }}>{children}</AlertContext.Provider>;
};
