import React, { Component } from 'react';
import { Avatar, Drawer, Divider, Button } from 'antd';
import { 
	MobileOutlined, 
	MailOutlined, 
	UserOutlined, 
	CompassOutlined,
	CalendarOutlined,
	FacebookOutlined,
	InstagramOutlined,
	TwitterOutlined,
	GlobalOutlined,
	UserAddOutlined
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUser, setUserProfileEdit, setUserProfileVisible } from 'redux/reducers/users';

const UserView = () => {

	const dispatch = useDispatch();
	const selectedUser = useSelector((state) => state.users.selectedUser);
	const userProfileVisible = useSelector((state) => state.users.userProfileVisible);

	const handleClose = () => {
		dispatch(setUserProfileVisible(false));
		dispatch(setSelectedUser(null))
	}

	return (
			<Drawer
				width={300}
				placement="right"
				onClose={handleClose}
				closable={true}
				maskClosable={true}
				visible={userProfileVisible}
			>
				<div className="text-center mt-3">
					<h3 className="mt-2 mb-0">{selectedUser?.name}</h3>
				</div>
				<Divider dashed />
				<div className="">
					<h6 className="text-muted text-uppercase mb-3">Account details</h6>
					<p>
						<span className="text-dark">id: {selectedUser?.id}</span>
					</p>
					<p>
						<UserOutlined />
						<span className="ml-3 text-dark">Username: {selectedUser?.username}</span>
					</p>
				</div>
				<div className="mt-5">
					<h6 className="text-muted text-uppercase mb-3">CONTACT</h6>
					<p>
						<MobileOutlined />
						<span className="ml-3 text-dark">{selectedUser?.phone? selectedUser?.phone : '-'}</span>
					</p>
					<p>
						<MailOutlined />
						<span className="ml-3 text-dark">{selectedUser?.email? selectedUser?.email: '-'}</span>
					</p>
					<p>
						<CompassOutlined />
						<span className="ml-3 text-dark">{selectedUser?.website? selectedUser?.website : '-'}</span>
					</p>
				</div>
				<div className="mt-5">
					<h6 className="text-muted text-uppercase mb-3">Address</h6>
					<p>
						<span className="text-dark">Street: {selectedUser?.address.street? selectedUser?.address.street : '-'}</span>
					</p>
					<p>
						<span className="text-dark">Suite: {selectedUser?.address.suite? selectedUser?.address.suite : '-'}</span>
					</p>
					<p>
						<span className="text-dark">Sity: {selectedUser?.address.city? selectedUser?.address.city : '-'}</span>
					</p>
					<p>
						<span className="text-dark">Zipcode: {selectedUser?.address.zipcode? selectedUser?.address.zipcode : '-'}</span>
					</p>
					<p>
						<span className="text-dark">Deo: -lat:{selectedUser?.address.geo.lat? selectedUser?.address.geo.lat : '-'} -lng:{selectedUser?.address.geo.lng? selectedUser?.address.geo.lng : '-'}</span>
					</p>
					<p>
					</p>
				</div>
			</Drawer>
		)
	
}

export default UserView
