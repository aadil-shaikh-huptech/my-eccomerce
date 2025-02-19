import axios from "axios"
const VITE_BACKEND_BASEURL = 'https://my-eccomerce-backend.vercel.app/api'

export const checkAuth = async (token) => {
    try {
        const response = await axios.get(`http://localhost:4000/api/auth/check-auth`, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
        })
        return response.data
    }
    catch (error) {
        // console.error("Error checking authentication: ", error)
        throw error
    }
}

export const fetchAdminDetails = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:4000/api/admin/profile/${userId}`, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
        })
        return response.data
    }
    catch (error) {
        // console.error("Error checking authentication: ", error)
        throw error
    }
}



export const logout = async () => {
    try {
        const response = await axios.post(`http://localhost:4000/api/auth/logout`, {}, {
            withCredentials: true,
        })
        return response
    }
    catch (error) {
        console.error("Error while logging out : ", error)
        throw error

    }
}



export const userSignUp = async (credentials) => {
    try {
        const response = await axios.post(`http://localhost:4000/api/auth/signup`, credentials, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });


        if (response.data.token && response.status === 200) {
            return response.data;
        } else {
            return "ERROR WHILE SIGNING UP";
        }
    } catch (error) {
        console.error('Signup failed', error);
        return "ERROR";
    }
};
