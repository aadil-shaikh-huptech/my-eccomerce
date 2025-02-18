import axios from "axios"
export const getUsers = async () => {
    try {
        const response = await axios.get(`http://localhost:4000/api/users/getUsers/`)
        return response.data
    }
    catch (error) {
        console.error("Error fetching users : ", error)
        throw error
    }
}

export const getUserById = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:4000/api/users/getUserById/${userId}`)
        return response.data
    }
    catch (error) {
        console.error("Error fetching users by ID", error)
        throw error
    }
}

export const addUser = async (userData) => {
    try {
        const response = await axios.post('http://localhost:4000/api/users/addUsers', userData);
        return response.data;
    } catch (error) {
        console.error('Error adding user:', error);
        throw error;
    }
}