import React, { useState, useEffect } from 'react';
import { Card, Table, Tag, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import moment from 'moment';
import UserView from './UserView';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import EditProfile from './EditProfile';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUser, setUserProfileEdit, setUserProfileVisible, setUsers } from 'redux/reducers/users';
import { set } from 'lodash';

const List = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const selectedUser = useSelector((state) => state.users.selectedUser);

  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch(setUsers(response.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsersData();
  }, []);

  const deleteUser = (userId) => {
    dispatch(setUsers(users.filter((item) => item.id !== userId)));
    message.success({ content: `Deleted user ${userId}`, duration: 2 });
  };

  const showUserProfile = (userInfo) => {
    dispatch(setUserProfileVisible(true));
    dispatch(setSelectedUser(userInfo));
  };

  const editUserProfile = (userInfo) => {
    dispatch(setUserProfileEdit(true));  
    dispatch(setSelectedUser(userInfo));
  };

  const closeUserProfile = () => {
    dispatch(setUserProfileVisible(false));
    dispatch(setSelectedUser(null));  
  };

  const closeUserProfileEdit = () => {
    dispatch(setUserProfileEdit(false));  
    dispatch(setSelectedUser(null));
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
      <EditProfile/>
      <Table columns={tableColumns} dataSource={users} rowKey="id" />
      <UserView/>
    </Card>
  );
};

export default List;
