import React, { useEffect } from 'react';

import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';

import { DELETE_NOTE_RESET } from '../../constants/noteConstants';

import UserDashboardNav from './UserDashBordNav';

const Dashboard = () => {
	const dispatch = useDispatch();
	const alert = useAlert();

	useEffect(() => {}, []);

	// console.log(userPackLimit);

	const { deleteError, isDeleted } = useSelector((state) => state.deleteNote);

	useEffect(() => {
		if (isDeleted) {
			dispatch({ type: DELETE_NOTE_RESET });
		}
	}, [dispatch, isDeleted, deleteError, alert]);

	return (
		<div>
			<UserDashboardNav />
			<div className='flex items-center justify-center h-screen'>
				<div className=''>
					<h1 className='text-3xl font-bold'>This is User Dashboard Page</h1>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
