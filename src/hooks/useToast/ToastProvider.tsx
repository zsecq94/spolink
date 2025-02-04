import { createContext, ReactNode, useRef } from 'react'
import Toast from './Toast'

type ToastContextType = {
  showToast: (message: string) => void
}

export const ToastContext = createContext<ToastContextType | null>(null)
export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const toastRef = useRef<ToastContextType | null>(null)

  const showToast = (message: string) => {
    if (toastRef.current) {
      toastRef.current.showToast(message)
    }
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast ref={toastRef} />
    </ToastContext.Provider>
  )
}
