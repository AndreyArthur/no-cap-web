import React, {
  createContext, ReactNode, useCallback, useContext, useRef, useState,
} from 'react';
import { ToastComponent } from '@/components';

type Toast = {
  type: 'success' | 'error';
  message: string;
};

type ToastContextData = {
  addToast: (data: Toast) => void;
};

export const ToastContext = createContext<ToastContextData>(
  {} as ToastContextData,
);

type ToastContextProviderProps = {
  children: ReactNode;
};

export const ToastContextProvider = (
  { children }: ToastContextProviderProps,
): JSX.Element => {
  const [active, setActive] = useState<boolean>(false);
  const [toast, setToast] = useState<Toast>({} as Toast);
  const refs = {
    divs: {
      toast: useRef<HTMLDivElement>(null),
    },
  };
  const addToast = useCallback(({ message, type }: Toast) => {
    if (active === true) return;

    setActive(true);
    setToast({
      message,
      type,
    });
    refs.divs.toast.current?.classList.remove('hide');
    refs.divs.toast.current?.classList.add('show');

    const FIVE_SECONDS = 5000;
    const ANIMATION_TIME = 400;

    setTimeout(() => {
    refs.divs.toast.current?.classList.remove('show');
    refs.divs.toast.current?.classList.add('hide');
    }, FIVE_SECONDS - ANIMATION_TIME);
    setTimeout(() => {
      setActive(false);
      setToast({} as Toast);
    }, FIVE_SECONDS);
  }, [active]);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {active && (
        <ToastComponent
          ref={refs.divs.toast}
          message={toast.message}
          type={toast.type === 'error' ? 'failure' : 'success'}
        />
      )}
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextData => useContext(ToastContext);
