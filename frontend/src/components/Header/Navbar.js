import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaQuestion } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import {
	MdOutlineMenuOpen,
	MdClose,
	MdAppRegistration,
	MdOutlineLogin,
} from 'react-icons/md';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<nav className='fixed inset-x-0 top-0 flex flex-wrap items-center justify-between p-3 px-6 bg-white shadow-lg'>
				<div className='flex items-center justify-start space-x-6 md:space-x-6 '>
					<MdOutlineMenuOpen
						className='text-3xl cursor-pointer md:hidden'
						onClick={() => setIsOpen(!isOpen)}
					/>
					<Link to='/'>
						<img src='./pynux_logo.png' alt='logo' className='w-40 ' />
					</Link>
				</div>

				{/* <div className='space-x-4 md:hidden'>
					<Link to='/'>
						<a className='text-xl font-medium text-my_color2'>Login</a>
					</Link>
					<Link to='/'>
						<a className='text-xl font-medium text-my_color2'>Register</a>
					</Link>
				</div> */}

				<div className='items-center hidden space-x-6 md:flex'>
					<h1 className='text-xl font-bold cursor-pointer text-my_color2 opacity-70'>
						Business
					</h1>
					<div className='flex items-center'>
						<FaQuestion className='p-1 text-2xl rounded-full text-my_color2 ring-2 ring-my_color1' />
						<Link to='/login'>
							<p className='inline-flex items-center p-2 text-xl font-medium text-my_color2'>
								Help
							</p>
						</Link>
					</div>
					<div className='flex items-center'>
						<FaUser className='p-1 text-2xl rounded-full text-my_color2 ring-2 ring-my_color1' />
						<Link to='/login'>
							<p className='inline-flex items-center p-2 text-xl font-medium text-my_color2'>
								Login
							</p>
						</Link>
					</div>

					<Link to='/register'>
						<p className='px-8 py-1 text-xl font-medium text-white rounded bg-gradient-to-r from-my_color1 to-my_color2'>
							Register
						</p>
					</Link>

					<AiOutlineMenu className='text-3xl' />
				</div>
				{/* <AiOutlineMenu className='text-3xl cursor-pointer md:hidden' /> */}
			</nav>
			{/* Mobile Menu */}
			<div
				className={`z-50 bg-gradient-to-r from-my_color1 to-my_color2 inset-y-0 md:hidden transition duration-300 ease-in-out absolute top-0 w-9/12 ${
					isOpen ? 'active-mobile-menu' : 'mobile-menu'
				} `}
			>
				<div className='flex items-center justify-between px-4 py-2 border-b-2 border-gray-400'>
					<Link to='/'>
						<p className='inline-flex items-center p-2 mr-4 '>
							<img src='./pynux_logo.png' alt='logo' className=' w-36' />
						</p>
					</Link>

					<MdClose
						className='text-3xl font-bold text-red-500 transition duration-300 ease-in-out cursor-pointer hover:scale-125'
						onClick={() => setIsOpen(false)}
					/>
				</div>

				<div className='pl-2 mt-6 space-y-4 text-white '>
					<div className='flex items-center space-x-4'>
						<MdOutlineLogin className='text-2xl font-medium ' />
						<Link to='/login'>
							<p
								className='text-xl font-medium '
								onClick={() => setIsOpen(!isOpen)}
							>
								Login
							</p>
						</Link>
					</div>
					<div className='flex items-center space-x-4'>
						<MdAppRegistration className='text-2xl font-medium ' />
						<Link to='/register'>
							<p
								className='text-xl font-medium '
								onClick={() => setIsOpen(!isOpen)}
							>
								Register
							</p>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
