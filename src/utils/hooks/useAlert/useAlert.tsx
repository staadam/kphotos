import { useContext } from 'react';
import { AlertContext, IAlertContext } from './alertProvider';

export const useAlert = () => {
  const alertContext = useContext(AlertContext);
  if (!alertContext) throw Error('useAlert needs to be used inside Alertontext');
  return alertContext as IAlertContext;
};
