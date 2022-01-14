import React, { useEffect } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_NOTE_RESET } from '../../constants/noteConstants';

import { logout } from '../../actions/userAction';
import { Link, useHistory } from 'react-router-dom';
import { FaUser, FaExchangeAlt, FaQuestion } from 'react-icons/fa';
import {
	MdOutlineDashboard,
	MdSend,
	MdOutlineDescription,
} from 'react-icons/md';
import {
	AiOutlineDownload,
	AiOutlineUpload,
	AiFillSetting,
} from 'react-icons/ai';

import { BsHeadset } from 'react-icons/bs';

// Side bar Content
const sideMenuItems = [
	{
		id: 1,
		name: 'Dashboard',
		icon: <MdOutlineDashboard />,
		link: '/dashboard',
	},
	{
		id: 2,
		name: 'deposit',
		icon: <AiOutlineDownload />,
		link: '/deposit',
	},
	{
		id: 3,
		name: 'Withdraw',
		icon: <AiOutlineUpload />,
		link: '/withdraw',
	},
	{
		id: 4,
		name: 'Send',
		icon: <MdSend />,
		link: '/send',
	},
	{
		id: 5,
		name: 'Exchange',
		icon: <FaExchangeAlt />,
		link: '/exchange',
	},
	{
		id: 6,
		name: 'Transactions',
		icon: <MdOutlineDescription />,
		link: '/transactions',
	},
	{
		id: 7,
		name: 'Settings',
		icon: <AiFillSetting />,
		link: '/settings',
	},
	{
		id: 8,
		name: 'Support',
		icon: <BsHeadset />,
		link: '/support',
	},
	{
		id: 9,
		name: 'FAQ',
		icon: <FaQuestion />,
		link: '/faq',
	},
];

const Dashboard = () => {
	const history = useHistory();
	const { user } = useSelector((state) => state.user);

	function logoutUser() {
		dispatch(logout());
		alert.success('Logout Successfully');
		history.push('/');
	}
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
			{/* <UserDashboardNav /> */}
			<div className='flex w-full h-screen '>
				<div className='grid w-full grid-cols-5'>
					{/* Side Nav */}
					<div className='col-span-1 pt-4 bg-gray-100'>
						<div className='flex items-center justify-center '>
							<Link to='/'>
								<img src='./pynux_logo.png' alt='logo' className='w-40 ' />
							</Link>
						</div>
						{/* Side Navigation Items */}
						<div className='mt-16 cursor-pointer'>
							{sideMenuItems.map((item) => {
								const { id, name, icon } = item;
								return (
									<div
										className='flex items-center w-full px-4 py-4 space-x-4 font-bold text-gray-800 hover:bg-gray-200'
										key={id}
									>
										<i className='text-2xl'>{icon}</i>
										<p className='text-xl'>{name}</p>
									</div>
								);
							})}
						</div>
					</div>
					{/* Header & Main */}
					<div className='col-span-4 px-4 pt-4'>
						<div className='flex items-center justify-end space-x-4'>
							<div className='flex items-center space-x-2'>
								<FaUser className='p-1 text-2xl rounded-full text-my_color2 ring-2 ring-my_color1' />

								<p className='inline-flex items-center p-2 text-xl font-medium text-my_color2'>
									{user.name}
								</p>
							</div>
							<div>
								<button
									className='py-2 text-xl font-medium transition-all duration-300 ease-in-out border-2 rounded cursor-pointer hover:text-white border-my_color2 px-9 hover:bg-my_color2 '
									onClick={() => logoutUser()}
								>
									Logout
								</button>
							</div>
						</div>
						<div className='px-20 mt-20 space-y-10'>
							{/* Balance */}
							<div className='space-y-8 '>
								<h2 className='text-2xl font-semibold text-gray-800'>
									Balance
								</h2>
								<div className='flex items-center justify-between px-4 py-10 border-2 rounded-3xl w-80 border-my_color2'>
									<h1 className='text-3xl font-bold text-gray-800'>USD</h1>
									<p className='text-xl text-gray-800'>0</p>
								</div>
							</div>

							{/* Recent Activity */}
							<div>
								<h2 className='text-2xl font-semibold text-gray-800'>
									Recent Activity
								</h2>
								<div></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
