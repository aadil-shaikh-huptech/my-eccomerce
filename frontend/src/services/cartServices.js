import axios from 'axios';

export const updateCartOnServer = async (userId, cartItems) => {
    try {
        const response = await axios.post('http://localhost:4000/api/cart/update', { userId, cartItems }, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        console.error('Error updating cart on server:', error);
        throw error;
    }
};

export const fetchCartFromServer = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:4000/api/cart/${userId}`);
        return response.data.cartItems || [];
    } catch (error) {
        console.error('Error fetching cart from server:', error);
        throw error;
    }
};



export const mergeCarts = async (userId, guestCart) => {
    try {
        const response = await axios.post('http://localhost:4000/api/cart/merge', { userId, guestCart }, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        console.error('Error merging carts:', error);
        throw error;
    }
};


export const removeCartFromServer = async (userId) => {
    try {
        const response = await axios.delete(`http://localhost:4000/api/cart/remove/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error removing cart from server:', error);
        throw error;
    }
}