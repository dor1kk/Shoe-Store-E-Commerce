import React from 'react';
import { Checkbox, Select, Button } from 'antd';

const { Option } = Select;

const Aside = ({ categories, sort, handleApplyFilters, handleSortChange, handleFilterChange }) => {
  return (
    <div className='p-8 '>
      <div className="mb-4 ">
        <h3 className="font-medium">Category</h3>
        <Checkbox.Group className="flex flex-col p-2 gap-2 w" >
          {categories.map((category) => (
            <Checkbox
              key={category.category_id}
              value={category.name}
              onChange={() => handleFilterChange('category', category.name)}
            >
              {category.name}
            </Checkbox>
          ))}
        </Checkbox.Group>
      </div>
      <div className="mb-4 ">
        <h3 className="font-medium">Sort By</h3>
        <Select value={sort} onChange={handleSortChange} style={{ width: '100%' }}>
          <Option value="default">Default</Option>
          <Option value="priceLowHigh">Price: Low to High</Option>
          <Option value="priceHighLow">Price: High to Low</Option>
        </Select>
      </div>
      <Button
        type="primary"
        className="bg-coral-red text-white py-2 px-4 rounded-md hover:bg-blue-600"
        onClick={handleApplyFilters}
      >
        Apply
      </Button>
    </div>
  );
};

export default Aside;
