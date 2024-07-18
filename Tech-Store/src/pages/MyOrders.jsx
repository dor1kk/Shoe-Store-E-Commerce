import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Tag, Typography, Spin } from 'antd';
import Navbar from '../sections/Navbar';
import '../styles/MyOrders.css'; // Import your custom CSS for additional styling

const { Title } = Typography;

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:5006/api/my-orders');
        setOrders(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching orders:', error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const columns = [
    {
        title: 'Product',
        dataIndex: 'name',
        key: 'name',
      },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price) => `$${price.toFixed(2)}`,
    },
    {
      title: 'Color',
      dataIndex: 'color',
      key: 'color',
      render: (color) => <div style={{ backgroundColor: color, width: '24px', height: '24px' }} />,
    },
    {
      title: 'RAM Size',
      dataIndex: 'size',
      key: 'size',
      responsive: ['md'],
    },
    {
        title: 'Order Status',
        dataIndex: 'order_status',
        key: 'order_status',
        render: (status) => {
          let color = status === 'pending' ? 'volcano' : 'green';
          return <Tag color={color}>{status.toUpperCase()}</Tag>;
        },
      },
    {
      title: 'Total Amount',
      dataIndex: 'total_amount',
      key: 'total_amount',
      render: (amount) => `$${amount.toFixed(2)}`,
    },
 
    {
      title: 'Created At',
      dataIndex: 'created_at',
      key: 'created_at',
      render: (date) => new Date(date).toLocaleString(),
    },
    {
      title: 'Updated At',
      dataIndex: 'updated_at',
      key: 'updated_at',
      responsive: ['md'],

      render: (date) => new Date(date).toLocaleString(),
    },
  ];

  return (
    <div className="my-orders-container">
      <Navbar />
      <div className="my-orders-content">
        {loading ? (
          <div className="text-center">
            <Spin size="large" />
          </div>
        ) : (
          <Table
            columns={columns}
            dataSource={orders}
            rowKey="order_item_id"
            pagination={{ pageSize: 10 }}
            bordered
            scroll={{ x: 'max-content' }} // Enable horizontal scroll for responsiveness
          />
        )}
      </div>
    </div>
  );
};

export default MyOrders;
