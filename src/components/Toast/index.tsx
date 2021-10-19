import React from 'react';

import './styles.css';

type ToastComponentProps = {
  message: string;
  type: 'success' | 'failure';
};

export const ToastComponent = React
  .forwardRef<HTMLDivElement, ToastComponentProps>((
  { message, type }: ToastComponentProps,
  ref,
): JSX.Element => (
  <div ref={ref} className={`component-toast ${type}`}>
    <h4>{message}</h4>
  </div>
));
