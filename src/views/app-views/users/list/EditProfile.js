import React, { Component, useRef } from 'react';
import { Form, Avatar, Button, Input, DatePicker, Row, Col, message, Upload } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import Flex from 'components/shared-components/Flex';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUser, setUserProfileEdit } from 'redux/reducers/users';

const EditProfile = () => {

    const dispatch = useDispatch();

    const selectedUser = useSelector((state) => state.users.selectedUser);
    const userProfileEdit = useSelector((state) => state.users.userProfileEdit);
    const formRef = useRef(null);
    if (!userProfileEdit) return null;

    const handleClose = () => {
      dispatch(setUserProfileEdit(false));
      dispatch(setSelectedUser(null))
    }

	const handleSaveChanges = async () => {
		const { name, email, username, phone, website, street, suite, city, zipcode } = formRef.current.getFieldsValue();
		const id = selectedUser.id;
		const payload = {
			name: name, 
			email: email, 
			username: username, 
			phone: phone, 
			website: website,
			address: {
				street: street, 
				suite: suite, 
				city: city, 
				zipcode: zipcode
			}};
		try{
			const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, payload);
      handleClose()
    } catch (error) {
			console.log(error);
		}
	}

    return (
      <>
        <div className="mt-4">
          <Form
		  	ref={formRef}
            name="basicInformation"
            layout="vertical"
            initialValues={{
              name: selectedUser?.name,
              email: selectedUser?.email? selectedUser?.email: '-',
              username: selectedUser?.username,
              phone: selectedUser?.phone? selectedUser?.phone : '-',
              website: selectedUser?.website? selectedUser?.website : '-',
			  street: selectedUser?.address.street? selectedUser?.address.street : '-',
			  suite: selectedUser?.address.suite? selectedUser?.address.suite : '-',
			  city: selectedUser?.address.city? selectedUser?.address.city : '-',
			  zipcode: selectedUser?.address.zipcode? selectedUser?.address.zipcode : '-'
            }}
          >
            <Row>
              <Col xs={24} sm={24} md={24} lg={16}>
                <Row gutter={ROW_GUTTER}>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Name"
                      name="name"
                      rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                      <Input value={selectedUser?.name}/>
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Username"
                      name="username"
                      rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                      <Input value={selectedUser?.username}/>
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Email"
                      name="email"
                      rules={[{ required: true, type: 'email', message: 'Please enter a valid email!' }]}
                    >
                      <Input value={selectedUser?.email? selectedUser?.email: '-'}/>
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item label="Phone Number" name="phone">
                      <Input value={selectedUser?.phone? selectedUser?.phone : '-'}/>
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item label="Website" name="website">
                      <Input value={selectedUser?.website? selectedUser?.website : '-'}/>
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={24}>
                    <Form.Item label="Street" name="street">
                      <Input value={selectedUser?.address.street? selectedUser?.address.street : '-'}/>
                    </Form.Item>
                  </Col>
				  <Col xs={24} sm={24} md={24}>
                    <Form.Item label="Suite" name="suite">
                      <Input value={selectedUser?.address.suite? selectedUser?.address.suite : '-'}/>
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item label="City" name="city">
                      <Input value={selectedUser?.address.city? selectedUser?.address.city : '-'} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item label="Zip code" name="zipcode">
                      <Input value={selectedUser?.address.zipcode? selectedUser?.address.zipcode : '-'} />
                    </Form.Item>
                  </Col>
                </Row>
				
				<Button
					type="primary"
					htmlType="submit"
					onClick={handleSaveChanges}
					>
					Save Change
				</Button>

				<Button
					type="danger" 
					htmlType="button" 
					onClick={handleClose}
					style={{ marginLeft: '10px' }} 
				>
					Close
				</Button>
              </Col>
            </Row>
          </Form>
        </div>
      </>
    );

}

export default EditProfile;
