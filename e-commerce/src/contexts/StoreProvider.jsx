import { useState, useEffect, useCallback } from 'react';
import Cookies from 'js-cookie';
import { StoreContext } from './index'
import { getInfo } from '@api/authService';
import { getCart } from '@api/cartService';
function StoreProvider({ children }) {

    const [userInfo, setUserInfo] = useState(null);

    const [cart, setCart] = useState([]);


    const handleLogout = useCallback(() => {
        Cookies.remove('token');
        Cookies.remove('refreshToken');
        Cookies.remove('userId');
        setUserInfo(null)
        setCart([]);
        window.location.reload();
    }, []);


    const fetchCart = useCallback(async () => {
        const userId = Cookies.get('userId');
        if (!userId) {
            setCart([]);
            return;
        }
        try {
            const res = await getCart(userId);
            setCart(res.data.data || []);
        } catch (error) {
            console.error("Failed to fetch cart:", error);
            if (error.response && error.response.status === 401) {
                handleLogout();
            }
        }
    }, [handleLogout]);



    const fetchUserInfo = useCallback(async () => {
        const userId = Cookies.get('userId');
        if (!userId) {
            setUserInfo(null);
            return;
        }
        try {
            const res = await getInfo(userId);
            setUserInfo(res.data.data);
        } catch (error) {
            console.error("Failed to fetch user info:", error);
            if (error.response && error.response.status === 401) {
                handleLogout();
            }
        }
    }, [handleLogout]);

    useEffect(() => {
        fetchUserInfo();
    }, [fetchUserInfo]);


    useEffect(() => {
        // Nếu có userInfo (tức là đã đăng nhập thành công)
        // thì tự động fetch giỏ hàng
        if (userInfo) {
            fetchCart();
        }
    }, [userInfo, fetchCart]);

    return (
        <StoreContext.Provider value={{ userInfo, handleLogout, fetchUserInfo, cart, fetchCart }}>
            {children}
        </StoreContext.Provider>
    );
}

export default StoreProvider;