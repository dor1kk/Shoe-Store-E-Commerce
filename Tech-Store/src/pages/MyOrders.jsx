import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Tag, Typography, Spin, Button, message } from 'antd';
import Navbar from '../sections/Navbar';
import '../styles/MyOrders.css';

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

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  const handleCancelOrder = async (orderId) => {
    try {
      await axios.post(`http://localhost:5006/api/cancel-order/${orderId}`);
      message.success('Order cancelled successfully');
      setOrders(orders.map(order => order.order_item_id === orderId ? { ...order, order_status: 'cancelled' } : order));
    } catch (error) {
      console.error('Error cancelling order:', error);
      message.error('Failed to cancel the order');
    }
  };

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
      render: (date) => formatDate(date),
    },
    {
      title: 'Updated At',
      dataIndex: 'updated_at',
      key: 'updated_at',
      responsive: ['md'],
      render: (date) => formatDate(date),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button
          type="primary"
          danger
          onClick={() => handleCancelOrder(record.order_item_id)}
          disabled={record.order_status !== 'pending'}
        >
          Cancel Order
        </Button>
      ),
    },
  ];

  return (
    <div className="">
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
            className='p-8'
            pagination={{ pageSize: 10 }}
            bordered
            scroll={{ x: 'max-content' }} 
          />
        )}
      </div>
    </div>
  );
};

export default MyOrders;
