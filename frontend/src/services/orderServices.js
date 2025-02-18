import axios from "axios";

export const saveOrders = async (userId, ordersData, totalPrice) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_BASEURL}/orders/add-orders`, { userId, ordersData, totalPrice }, {
            withCredentials: true,
        });

        if (response.status < 200 || response.status >= 300) {
            throw new Error("Failed to save orders");
        }

        return response.data;
    } catch (error) {
        console.error("Error saving orders: ", error);
        throw error;
    }
};

export const fetchOrders = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_BASEURL}/orders/fetch-orders`, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 200) {
            return response.data
        }

    } catch (error) {
        console.error("Error saving orders: ", error);
        throw error;
    }
};

