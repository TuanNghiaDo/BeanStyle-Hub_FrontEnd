import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { StoreContext } from './index'
import { getInfo } from '@api/authService';
function StoreProvider({ children }) {

    const [userInfo, setUserInfo] = useState(null);

    const userId = Cookies.get('userId');

    console.log(userId)

    const handleLogout = () => {
        console.log("Logout")
        Cookies.remove('token');
        Cookies.remove('refreshToken');
        Cookies.remove('userId');
        setUserInfo(null)
        window.location.reload();
    }
    useEffect(() => {
        if (userId) {
            getInfo(userId)
                .then((res) => {
                    setUserInfo(res.data.data);
                })
                .catch((error) => {
                    console.error("Failed to fetch user info:", error);
                });
        }
    }, [userId])

    console.log("User Info:", userInfo)
    return (
        <StoreContext.Provider value={{ userInfo, handleLogout, setUserInfo }}>
            {children}
        </StoreContext.Provider>
    );
}

export default StoreProvider;