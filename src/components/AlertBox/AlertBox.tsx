import React from 'react';
import { useAlert } from '../../utils/hooks/useAlert/useAlert';
import { AlertWrapper, Alert } from './AlertBox.styled';

export const AlertBox = () => {
  const { alerts } = useAlert();

  return (
    <AlertWrapper>
      {alerts.map((alert) => (
        <Alert key={alert.id}>{alert.text}</Alert>
      ))}
    </AlertWrapper>
  );
};
