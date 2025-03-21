import React, { Component } from 'react';
import { Form, Avatar, Button, Input, DatePicker, Row, Col, message, Upload } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import Flex from 'components/shared-components/Flex';
import axios from 'axios';

export class EditProfile extends Component {
	constructor(props) {
		super(props);
		this.formRef = React.createRef(); 
	  }

  render() {
    const { data, visible, close } = this.props;
    if (!visible) return null;

	const handleSaveChanges = async () => {
		const { name, email, username, phone, website, street, suite, city, zipcode } = this.formRef.current.getFieldsValue();
		const id = data.id;
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
			close();
		} catch (error) {
			console.log(error);
		}
	}

    return (
      <>
        <div className="mt-4">
          <Form
		  	ref={this.formRef}
            name="basicInformation"
            layout="vertical"
            initialValues={{
              name: data?.name,
              email: data?.email? data?.email: '-',
              username: data?.username,
              phone: data?.phone? data?.phone : '-',
              website: data?.website? data?.website : '-',
			  street: data?.address.street? data?.address.street : '-',
			  suite: data?.address.suite? data?.address.suite : '-',
			  city: data?.address.city? data?.address.city : '-',
			  zipcode: data?.address.zipcode? data?.address.zipcode : '-'
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
                      <Input value={data?.name}/>
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Username"
                      name="username"
                      rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                      <Input value={data?.username}/>
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item
                      label="Email"
                      name="email"
                      rules={[{ required: true, type: 'email', message: 'Please enter a valid email!' }]}
                    >
                      <Input value={data?.email? data?.email: '-'}/>
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item label="Phone Number" name="phone">
                      <Input value={data?.phone? data?.phone : '-'}/>
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item label="Website" name="website">
                      <Input value={data?.website? data?.website : '-'}/>
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={24}>
                    <Form.Item label="Street" name="street">
                      <Input value={data?.address.street? data?.address.street : '-'}/>
                    </Form.Item>
                  </Col>
				  <Col xs={24} sm={24} md={24}>
                    <Form.Item label="Suite" name="suite">
                      <Input value={data?.address.suite? data?.address.suite : '-'}/>
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item label="City" name="city">
                      <Input value={data?.address.city? data?.address.city : '-'} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={12}>
                    <Form.Item label="Zip code" name="zipcode">
                      <Input value={data?.address.zipcode? data?.address.zipcode : '-'} />
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
					onClick={close}
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
}

export default EditProfile;
