import { ReactNode } from 'react';

export interface IStyledButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: any;
}
