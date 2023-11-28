import Link from 'next/link';
import { useState } from 'react';

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    productName: '',
    productPrice: '',
    description: '',
    productPhoto: null, // Initialize as null for file input
    city: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, files } = e.target;

    // Handle file input separately
    if (name === 'productPhoto') {
      setFormData({
        ...formData,
        [name]: files && files.length ? files[0] : null,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
	var userName = '';
	if(localStorage.getItem('owner')){
		userName = localStorage.getItem('owner');
	}
	
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('productName', formData.productName);
      formDataToSend.append('productPrice', formData.productPrice);
      formDataToSend.append('description', formData.description);
	  formDataToSend.append('city', formData.city);
      formDataToSend.append('productPhoto', formData.productPhoto);
	  formDataToSend.append('productowner', userName); // Append as Blob

      const response = await fetch('http://localhost:8000/api/anonce', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();
      if (response.status === 500) {
        console.log('Internal Server Error');
      }
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div className="flex">
      <form onSubmit={handleSubmit} className="form-container">
        <p className="form-title">Add Product</p>

        <div className="form-flex">
          <label className="form-label">
            <input
              className="form-input"
              type="text"
              placeholder="Product Name"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              required
            />
          </label>

          <label className="form-label">
            <input
              className="form-input"
              type="text"
              placeholder="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <label className="form-label">
          <input
            className="form-input"
            type="text"
            placeholder="Product Price"
            name="productPrice"
            value={formData.productPrice}
            onChange={handleChange}
            required
          />
        </label>

        <label className="form-label">
          <textarea
            className="form-input"
            placeholder="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </label>

        <label className="form-label">
          <input
            className="form-input"
            type="file"
            name="productPhoto"
            accept="image/*"
            onChange={handleChange}
            required
          />
          <span>Product Photo</span>
        </label>

        <button className="form-submit" type="submit">
          Submit
        </button>

        <p className="form-signin">
          Already have an account? <Link href="/login">Sign in</Link>
        </p>
      </form>
    </div>
  );
};

export default AddProductForm;
