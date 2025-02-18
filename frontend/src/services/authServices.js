import axios from "axios"

export const checkAuth = async () => {
    try {
        const response = await axios.get("http://localhost:4000/api/auth/check-auth", {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
            },
        })
        return response.data
    }
    catch (error) {
        // console.error("Error checking authentication: ", error)
        throw error
    }
}

export const fetchAdminDetails = async () => {
    try {
        const response = await axios.get("http://localhost:4000/api/admin/profile", {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
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
        const response = await axios.post("http://localhost:4000/api/auth/logout", {}, {
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
        const response = await axios.post('http://localhost:4000/api/auth/signup', credentials, {
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
