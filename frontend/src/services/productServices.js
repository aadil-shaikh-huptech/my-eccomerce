import axios from "axios"

export const fetchProductsData = async () => {
    try {
        const response = await fetch(`${import.meta.env.BACKEND_BASEURL}/products/`)

        if (!response.ok) {
            throw new Error("Failed to fetch products")
        }
        return response.json()
    }
    catch (error) {
        console.error("Error fetching products: ", error)
        throw error
    }
}

export const fetchOneProduct = async (productId) => {
    try {
        const response = await fetch(`https://my-eccomerce-backend.vercel.app/api/products/${'67a5e7d6cc97f9ac16ee35d7'}`);
        const data = await response.json();
        return data
    } catch (error) {
        console.error('Failed to fetch product details', error);
    }
};


export const addProduct = async (product) => {
    try {
        const response = await fetch(`${import.meta.env.BACKEND_BASEURL}/products/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product)
        })
        if (!response.ok) {
            throw new Error("Failed to add product")
        }
        return response.json()
    }
    catch (error) {
        console.error("Error adding product: ", error)
        throw error
    }
}

export const updateProduct = async (productId, updatedProduct) => {
    try {
        const response = await fetch(`${import.meta.env.BACKEND_BASEURL}/products/${productId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProduct)
        })
        if (!response.ok) {
            throw new Error("Failed to update product")
        }
        return response

    }
    catch (error) {
        console.error("Error updating product: ", error)
        throw error
    }
}

export const deleteProduct = async (productId) => {
    try {
        const response = await fetch(`${import.meta.env.BACKEND_BASEURL}/products/${productId}`, {
            method: "DELETE"
        })
        if (!response.ok) {
            throw new Error("Failed to delete product")
        }
    }
    catch (error) {
        console.error("Error deleting product: ", error)
        throw error
    }
}

export const fetchProductsByCategory = async (category) => {
    try {
        const response = await axios.get(`${import.meta.env.BACKEND_BASEURL}/products/category/${category}`)
        return response.data
    }
    catch (error) {
        console.error("Error fetching products by category", error)
        throw error
    }
}

export const fetchProductCategories = async () => {
    try {
        const response = await axios.get(`${import.meta.env.BACKEND_BASEURL}/products/categories/all`)
        return response.data
    }
    catch (error) {
        console.error("Error fetching product categories", error)
        throw error
    }
} 