import { useState, useEffect, useCallback } from 'react';
import Cookies from 'js-cookie';
import { StoreContext } from './index'
import { getInfo } from '@api/authService';
function StoreProvider({ children }) {

    const [userInfo, setUserInfo] = useState(null);

    const handleLogout = () => {
        Cookies.remove('token');
        Cookies.remove('refreshToken');
        Cookies.remove('userId');
        setUserInfo(null)
        window.location.reload();
    }

    const fetchUserInfo = useCallback(() => {
        const userId = Cookies.get('userId');

        if (!userId) {
            setUserInfo(null);
            return;
        }

        getInfo(userId)
            .then((res) => {
                const newUserInfo = res.data.data
                setUserInfo(newUserInfo);
            })
            .catch((error) => {
                console.error("Failed to fetch user info:", error);
            });
    }, []);

    useEffect(() => {
        fetchUserInfo();
    }, [fetchUserInfo]);

    return (
        <StoreContext.Provider value={{ userInfo, handleLogout, fetchUserInfo }}>
            {children}
        </StoreContext.Provider>
    );
}

export default StoreProvider;