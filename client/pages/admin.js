import React, { useState } from 'react';
import Tabs from '../components/Admin/Tabs';
import Users from '../components/Admin/Users';

const tabs = [
	{ name: 'users', label: 'משתמשים' },
	{ name: 'chats', label: 'שיחות' },
	{ name: 'meetings', label: 'פגישות' }
]

const admin = () => {
	const [ tab, setTab ] = useState('users');

	return (
		<div className="container">
			<div className="container-inner">
				<Tabs tabs={ tabs } tab={ tab } setTab={ setTab }/>

				<div id="admin-tab-content">
					{ tab === 'users' && <Users tab={ tab } setTab={ setTab } /> }
				</div>
			</div>
		</div>
	)
}

export default admin