import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


import { ToastContext } from './index'


export const ToastProvider = ({ children }) => {

    const value = {
        toast,
    }

    return (
        <ToastContext.Provider value={value}>
            {children}
            <ToastContainer />
        </ToastContext.Provider>
    )
}