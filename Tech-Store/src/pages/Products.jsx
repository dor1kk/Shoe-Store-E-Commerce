import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Input } from 'antd';
import { Link } from 'react-router-dom';
import Navbar from '../sections/Navbar';
import Aside from '../components/Aside';
import { FaFilter } from 'react-icons/fa';
import { AiFillCloseCircle } from 'react-icons/ai';

const Products = () => {
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({
    category: [],
    priceRange: [],
  });
  const [sort, setSort] = useState('default');
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [toggleSidebar, setToggleSidebar] = useState(false);

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:5006/api/categories');
      setCategories(response.data.categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5006/api/products');
      setProducts(response.data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      if (newFilters[filterType].includes(value)) {
        newFilters[filterType] = newFilters[filterType].filter((item) => item !== value);
      } else {
        newFilters[filterType].push(value);
      }
      return newFilters;
    });
  };

  const handleSortChange = (value) => {
    setSort(value);
  };

  const handleApplyFilters = () => {
    console.log('Filters applied:', filters);
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
    filterProducts(value);
  };

  const filterProducts = (value) => {
    if (value.trim() === '') {
      setFilteredProducts([]);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  const truncateProductName = (name, maxLength) => {
    if (name.length > maxLength) {
      return `${name.substring(0, maxLength)}...`;
    }
    return name;
  };

  return (
    <>
      <Navbar />
      <div className="flex max-lg:flex-col">
        <aside className="hidden md:block w-1/4 max-lg:w-1/5 p-4 border-r border-gray-200">
          <Aside
            categories={categories}
            sort={sort}
            handleApplyFilters={handleApplyFilters}
            handleSortChange={handleSortChange}
            handleFilterChange={handleFilterChange}
          />
        </aside>

        <div className="md:hidden  flex justify-between items-center p-2 w-full text-coral-red ml-4 mt-4 mb-4 z-10">
          <FaFilter fontSize={24} className="cursor-pointer" onClick={() => setToggleSidebar(true)} />
       
        </div>

        {toggleSidebar && (
          <div className="fixed md:hidden top-0 left-0 w-3/5 bg-white p-8 h-screen overflow-y-auto shadow-md z-20 animate-slide-in">
            <div className="absolute w-full flex justify-end items-center px-16">
              <AiFillCloseCircle fontSize={24} className="cursor-pointer" onClick={() => setToggleSidebar(false)} />
            </div>
            <Aside
              categories={categories}
              sort={sort}
              handleApplyFilters={handleApplyFilters}
              handleSortChange={handleSortChange}
              handleFilterChange={handleFilterChange}
            />
          </div>
        )}

        <main className="w-full md:w-3/4 p-4">
          <Input.Search
            placeholder="Search products..."
            allowClear
            onChange={(e) => handleSearch(e.target.value)}
            style={{ width: '100%', marginBottom: '1rem' }}
            className="shadow"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
            {(searchTerm ? filteredProducts : products).map((product) => (
              <Link
                key={product.product_id}
                to={`/product/${product.product_id}`}
                className="p-4 rounded hover:bg-gray-50 cursor-pointer"
              >
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="object-cover w-full h-48 max-lg:h-64"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold font-palanquin">
                    {truncateProductName(product.name, 15)}
                  </h3>
                  <p className="text-gray-800 font-semibold">${product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default Products;
