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

export class UserView extends Component {
	render() {
		const { data, visible, close} = this.props;
		return (
			<Drawer
				width={300}
				placement="right"
				onClose={close}
				closable={true}
				maskClosable={true}
				visible={visible}
			>
				<div className="text-center mt-3">
					<h3 className="mt-2 mb-0">{data?.name}</h3>
				</div>
				<Divider dashed />
				<div className="">
					<h6 className="text-muted text-uppercase mb-3">Account details</h6>
					<p>
						<span className="text-dark">id: {data?.id}</span>
					</p>
					<p>
						<UserOutlined />
						<span className="ml-3 text-dark">Username: {data?.username}</span>
					</p>
				</div>
				<div className="mt-5">
					<h6 className="text-muted text-uppercase mb-3">CONTACT</h6>
					<p>
						<MobileOutlined />
						<span className="ml-3 text-dark">{data?.phone? data?.phone : '-'}</span>
					</p>
					<p>
						<MailOutlined />
						<span className="ml-3 text-dark">{data?.email? data?.email: '-'}</span>
					</p>
					<p>
						<CompassOutlined />
						<span className="ml-3 text-dark">{data?.website? data?.website : '-'}</span>
					</p>
				</div>
				<div className="mt-5">
					<h6 className="text-muted text-uppercase mb-3">Address</h6>
					<p>
						<span className="text-dark">Street: {data?.address.street? data?.address.street : '-'}</span>
					</p>
					<p>
						<span className="text-dark">Suite: {data?.address.suite? data?.address.suite : '-'}</span>
					</p>
					<p>
						<span className="text-dark">Sity: {data?.address.city? data?.address.city : '-'}</span>
					</p>
					<p>
						<span className="text-dark">Zipcode: {data?.address.zipcode? data?.address.zipcode : '-'}</span>
					</p>
					<p>
						<span className="text-dark">Deo: -lat:{data?.address.geo.lat? data?.address.geo.lat : '-'} -lng:{data?.address.geo.lng? data?.address.geo.lng : '-'}</span>
					</p>
					<p>
					</p>
				</div>
			</Drawer>
		)
	}
}

export default UserView
