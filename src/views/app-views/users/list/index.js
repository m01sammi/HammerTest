import React, { useState, useEffect } from 'react';
import { Card, Table, Tag, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import moment from 'moment';
import UserView from './UserView';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import EditProfile from './EditProfile';
import axios from 'axios';

const List = () => {
  const [fetchUsers, setFetchUsers] = useState([]);
  const [userProfileVisible, setUserProfileVisible] = useState(false);
  const [userProfileEdit, setUserProfileEdit] = useState(false);  
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setFetchUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsersData();
  }, []);

  const deleteUser = (userId) => {
    setFetchUsers(fetchUsers.filter((item) => item.id !== userId));
    message.success({ content: `Deleted user ${userId}`, duration: 2 });
  };

  const showUserProfile = (userInfo) => {
    setUserProfileVisible(true);
    setSelectedUser(userInfo);
  };

  const editUserProfile = (userInfo) => {
    setUserProfileEdit(true);  
    setSelectedUser(userInfo); 
  };

  const closeUserProfile = () => {
    setUserProfileVisible(false);
    setSelectedUser(null);
  };

  const closeUserProfileEdit = () => {
    setUserProfileEdit(false);  
    setSelectedUser(null);
  };

  const tableColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (_, record) => (
        <div className="d-flex">
          <h4>{record.name}</h4>
        </div>
      ),
      sorter: (a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
    },
    {
      title: 'Username & Email',
      render: (_, record) => (
        <div>
          <h4>{record.username}</h4>
          <p>{record.email}</p>
        </div>
      ),
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      render: (phone) => <span>{phone}</span>,
    },
    {
      title: 'Website',
      dataIndex: 'website',
      render: (website) => <span>{website}</span>,
    },
    {
      title: '',
      dataIndex: 'actions',
      render: (_, elm) => (
        <div className="text-right">
          <Tooltip title="Edit">
            <Button
              type="primary"
              className="mr-2"
              icon={<EditOutlined />}
              onClick={() => editUserProfile(elm)}  
              size="small"
            />
          </Tooltip>
          <Tooltip title="View">
            <Button
              type="primary"
              className="mr-2"
              icon={<EyeOutlined />}
              onClick={() => showUserProfile(elm)}
              size="small"
            />
          </Tooltip>
          <Tooltip title="Delete">
            <Button danger icon={<DeleteOutlined />} onClick={() => deleteUser(elm.id)} size="small" />
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <Card bodyStyle={{ padding: '0px' }}>
      <EditProfile 
        data={selectedUser} 
        visible={userProfileEdit}   
        close={closeUserProfileEdit} 
      />
      <Table columns={tableColumns} dataSource={fetchUsers} rowKey="id" />
      <UserView data={selectedUser} visible={userProfileVisible} close={closeUserProfile} />
    </Card>
  );
};

export default List;
