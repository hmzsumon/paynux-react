import React from 'react';

const Banner = () => {
	return (
		<div
			className='h-screen bg-cover bg-center bg-no-repeat'
			style={{
				backgroundImage: `url(${'./banner.jpg'})`,
			}}
		>
			<div className='grid md:grid-cols-3 flex-wrap'>
				<div className='h-screen  col-span-2 flex justify-center text-white items-center md:items-start space-y-6 flex-col md:pl-32 px-4 md:px-10'>
					<p className='text-xl font-medium'>
						Make it. Move it. Send it. Spend it.
					</p>
					<h1 className='text-3xl font-bold line leading-10 w-full md:w-9/12'>
						Instant, secure money transfers to and from your trading platform
					</h1>
					<button className='bg-gradient-to-r  from-my_color1 to-my_color2 py-1 px-8 text-white text-xl font-medium rounded'>
						Get Started
					</button>
				</div>
				<div className=' h-screen col-span-1'></div>
			</div>
		</div>
	);
};

export default Banner;
