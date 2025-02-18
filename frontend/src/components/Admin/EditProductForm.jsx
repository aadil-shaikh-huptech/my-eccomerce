import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../styles/ProductForm.scss';

const EditProductForm = ({ product, onUpdate }) => {
  const [id, setId] = useState(product?._id || '');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [rating, setRating] = useState('');
  const [stock, setStock] = useState('');
  const [minimumOrderQuantity, setMinimumOrderQuantity] = useState('');
  const [category, setCategory] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const navigate = useNavigate()

  useEffect(() => {
    if (product) {
      setId(product._id)
      setTitle(product.title);
      setDescription(product.description);
      setPrice(product.price);
      setDiscountPercentage(product.discountPercentage);
      setRating(product.rating);
      setStock(product.stock);
      setMinimumOrderQuantity(product.minimumOrderQuantity);
      setCategory(product.category)
      setThumbnail(product.thumbnail);
    }
  }, [product]);



  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      _id: id,
      title,
      description,
      price: parseFloat(price),
      discountPercentage: parseFloat(discountPercentage),
      rating: parseFloat(rating),
      stock: parseInt(stock, 10),
      minimumOrderQuantity: parseInt(minimumOrderQuantity, 10),
      category,
      thumbnail,
    };
    onUpdate(updatedProduct);
    // Reset form
    setTitle('');
    setDescription('');
    setPrice('');
    setDiscountPercentage('');
    setRating('');
    setStock('');
    setMinimumOrderQuantity('');
    setCategory('');
    setThumbnail('');
    navigate('/admin')
  };
  return (
    <div className="product-container">
      <h2 className="product-heading">Edit Product</h2>
      <form className="product-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input
            type='text'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Discount Percentage:</label>
          <input
            type="number"
            value={discountPercentage}
            onChange={(e) => setDiscountPercentage(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Rating:</label>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Stock:</label>
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Minimum Order Quantity:</label>
          <input
            type="number"
            value={minimumOrderQuantity}
            onChange={(e) => setMinimumOrderQuantity(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="" disabled>Select category</option>
            <option value="beauty">Beauty</option>
            <option value="fragrances">Fragrances</option>
            <option value="furniture">Furniture</option>
            <option value="groceries">Groceries</option>
          </select>
        </div>
        <div className="form-group">
          <label>Thumbnail URL:</label>
          <input
            type="text"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="product-button">Update Product</button>
      </form>
    </div>
  )
}

export default EditProductForm