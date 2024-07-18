import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Navbar from '../sections/Navbar';
import { Rate, Button, InputNumber, message } from 'antd';

const ProductDetail = () => {

    axios.defaults.withCredentials=true;

  const location = useLocation();
  const productId = location.pathname.split('/').pop();

  const [product, setProduct] = useState(null);
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [additionalImages, setAdditionalImages] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [price, setPrice] = useState(null);

  const fetchProductById = async () => {
    try {
      const response = await axios.get(`http://localhost:5006/api/auth/products/${productId}`);
      const productData = response.data.results[0];
      setProduct(productData);
      setPrice(productData.price);

      const parsedColors = JSON.parse(productData.colors || '[]');
      const parsedSizes = JSON.parse(productData.sizes || '[]');
      const parsedAdditionalImages = JSON.parse(productData.additional_images || '[]');

      setColors(Array.isArray(parsedColors) ? parsedColors : []);
      setSizes(Array.isArray(parsedSizes) ? parsedSizes : []);
      setAdditionalImages(Array.isArray(parsedAdditionalImages) ? parsedAdditionalImages : []);

      if (Array.isArray(parsedAdditionalImages) && parsedAdditionalImages.length > 0) {
        setMainImage(parsedAdditionalImages[0].url);
      }

    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  useEffect(() => {
    fetchProductById();
  }, [productId]);

  const handleAdditionalImageClick = (image) => {
    setMainImage(image.url);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  const handleAddToBag = async () => {
    try {
      if (!price || isNaN(price)) {
        throw new Error('Invalid product price');
      }

      const orderData = {
        product_id: productId,
        quantity,
        color: selectedColor,
        size: selectedSize,
        price,
        total_amount: price * quantity,
        order_status: 'pending'
      };

      const response = await axios.post('http://localhost:5006/api/auth/orderitems', orderData);
      console.log('Order placed successfully:', response.data);

      message.success('Order placed successfully!');
    } catch (error) {
      console.error('Error placing order:', error);
      message.error('Failed to place order. Please try again later.');
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className='p-8 flex justify-center'>
        <div className='flex flex-col lg:flex-row bg-white rounded-lg overflow-hidden w-full'>
          <div className='flex lg:w-2/5'>
            <img
              src={mainImage || product.image_url}
              className='object-cover w-full h-full lg:h-auto'
              alt={product.name}
            />
          </div>
          <div className='hidden max-lg:flex max-lg:flex-row flex-col w-3/5 gap-2 mt-12'>
            {additionalImages.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt=''
                className='object-cover rounded-lg shadow-xl cursor-pointer'
                style={{ width: "110px", height: "110px" }}
                onClick={() => handleAdditionalImageClick(image)}
              />
            ))}
          </div>
          <div className='flex flex-col lg:w-3/5 p-8'>
            <h1 className='text-3xl font-bold mb-4'>{product.name}</h1>
            <div className='flex items-center mb-4'>
              <span className='text-2xl text-red-500 font-bold'>${product.price}</span>
              <span className='ml-4 text-sm line-through text-gray-500'>$74.95</span>
            </div>
            <div className='flex items-center mb-4'>
              <Rate value={4.5} allowHalf disabled />
              <span className='ml-2 text-gray-600'>({product.reviews?.length} Reviews)</span>
            </div>
            <p className='mb-4'>{product.description}</p>
            <div className='mb-4'>
              <span className='font-semibold'>Color: </span>
              <div className='flex'>
                {colors.map((color, index) => (
                  <div
                    key={index}
                    className={`w-6 h-6 mr-2 rounded-full border ${selectedColor === color ? 'border-black' : 'border-gray-300'}`}
                    style={{ backgroundColor: color, cursor: 'pointer' }}
                    onClick={() => handleColorClick(color)}
                  ></div>
                ))}
              </div>
            </div>
            <div className='flex items-center mb-4'>
              <span className='font-semibold mr-2'>RAM Size: </span>
              <div className='flex overflow-x-auto'>
                {sizes.map((size, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer font-bold border text-xs border-gray-300 rounded-md px-4 py-2 mr-2 flex items-center ${selectedSize === size ? 'bg-gray-200' : ''}`}
                    onClick={() => handleSizeClick(size)}
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    <span>{size}GB</span>
                  </div>
                ))}
              </div>
            </div>
            <div className='mb-4'>
              <span className='font-semibold'>Additional Images: </span>
            </div>
            <div className='flex flex-row gap-4 justify-start items-center'>
              <span className='font-semibold mr-2'>Quantity: </span>
              <InputNumber
                min={1}
                max={10}
                defaultValue={1}
                onChange={handleQuantityChange}
                className='ml-2'
              />
              <Button
                type='primary'
                onClick={handleAddToBag}
                className='rounded-xl w-3/5'
              >
                Add to Bag
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
