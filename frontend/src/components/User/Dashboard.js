import React, { useEffect, useState } from 'react';
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
	MdOutlineMenuOpen,
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

	const [isOpen, setIsOpen] = useState(false);
	const [showModel, setShowModel] = useState(false);

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
		<>
			{/* <UserDashboardNav /> */}
			<div className='flex w-full h-screen '>
				<div className='grid w-full md:grid-cols-5'>
					{/* Side Nav */}
					<div className='hidden col-span-1 pt-4 bg-gray-100 md:block '>
						<div className='flex items-center justify-center '>
							<Link to='/'>
								<img src='./pynux_logo.png' alt='logo' className='w-40 ' />
							</Link>
						</div>
						{/* Side Navigation Items */}
						<div className='mt-16 '>
							{sideMenuItems.map((item) => {
								const { id, name, icon } = item;
								return (
									<div
										className='flex items-center w-full px-4 py-4 space-x-4 font-medium text-gray-700 uppercase transition-all duration-300 ease-in-out cursor-pointer hover:bg-gray-200 hover:text-gray-900'
										key={id}
									>
										<i className='text-2xl'>{icon}</i>
										<p className='text-lg'>{name}</p>
									</div>
								);
							})}
						</div>
					</div>
					{/* Header & Main */}
					<div className='relative flex flex-col items-center w-full md:col-span-4 '>
						{/* Header */}
						<div className='flex items-center justify-between w-full bg-white md:justify-end md:bg-transparent'>
							<div className='md:hidden'>
								<div className='flex items-center justify-center h-full pl-4 space-x-4 '>
									<MdOutlineMenuOpen
										className={`text-3xl rounded-full cursor-pointer md:hidden hover:ring-2 my-transition mobile-menubar ${
											isOpen ? 'mobile-menubar-active' : ''
										}`}
										onClick={() => setIsOpen(!isOpen)}
									/>
									<Link to='/'>
										<img src='./pynux_logo.png' alt='logo' className='w-40 ' />
									</Link>
								</div>
							</div>
							<div className='flex items-center justify-end p-4 space-x-4 '>
								<div className='relative flex items-center space-x-2'>
									<FaUser
										className='p-1 text-2xl rounded-full cursor-pointer text-my_color2 ring-2 ring-my_color1'
										onClick={() => setShowModel(!showModel)}
									/>

									<p className='items-center hidden p-2 text-xl font-medium md:inline-flex text-my_color2'>
										{user.name}
									</p>

									{/* user info model */}
									{showModel && (
										<div className='absolute w-64 h-auto p-6 bg-white -right-7 md:-right-24 rounded-2xl top-11 md:top-14'>
											<p className='items-center p-2 text-xl font-medium md:inline-flex text-my_color2'>
												{user.name}
											</p>
											<p>{user.email}</p>
											<p>Customer Id: {user.customer_id}</p>
											<button
												className='py-2 mt-4 text-xl font-medium transition-all duration-300 ease-in-out border-2 rounded cursor-pointer md:block hover:text-white border-my_color2 px-9 hover:bg-my_color2'
												onClick={() => logoutUser()}
											>
												Logout
											</button>
										</div>
									)}
								</div>

								<div>
									<button
										className='hidden py-2 text-xl font-medium transition-all duration-300 ease-in-out border-2 rounded cursor-pointer md:block hover:text-white border-my_color2 px-9 hover:bg-my_color2 '
										onClick={() => logoutUser()}
									>
										Logout
									</button>
								</div>
							</div>
						</div>
						{/* Mobile Menu */}
						<div
							className={`absolute inset-y-0 left-0 bg-gray-100 top-14 md:hidden my-transition ${
								isOpen ? 'active-mobile-menu' : 'mobile-menu'
							}`}
						>
							{sideMenuItems.map((item) => {
								const { id, name, icon } = item;
								return (
									<div
										className='flex items-center w-full px-4 py-4 space-x-4 font-medium text-gray-700 uppercase cursor-pointer my-transition hover:bg-gray-200 hover:text-gray-900'
										key={id}
										onClick={() => setIsOpen(!isOpen)}
									>
										<i className='text-2xl'>{icon}</i>
										<p className='text-lg'>{name}</p>
									</div>
								);
							})}
						</div>
						{/* Start Main Section  */}
						<div className='flex items-center justify-center w-full mt-20 '>
							<div className='w-full px-4 py-4 space-y-10 md:w-9/12 rounded-3xl '>
								{/* Balance */}
								<div className='space-y-8 '>
									<h2 className='text-2xl font-semibold text-gray-800'>
										Balance
									</h2>
									<div className='flex items-center justify-between px-4 py-10 border-2 rounded-3xl md:w-80 border-my_color2'>
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
						{/* End Main Section */}
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
