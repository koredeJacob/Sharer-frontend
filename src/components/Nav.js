import React from 'react'

const Nav = ({ ProfilePic }) => {
	return (
		<div className='w-[100vw] flex fixed z-10 bg-zinc-300 opacity-[.97] top-0 p-1.5 justify-between items-center mb-6 md:w-[100vw] md:justify-around'>
			<div>
				<img
					src={ProfilePic}
					referrerPolicy='no-referrer'
					className='w-10 rounded-full'
					alt='profile picture'
				/>
			</div>
			<h2 className='text-2xl font-light font-cursive'>ideashare</h2>
			<button className='text-base font-cursive'>sign out</button>
		</div>
	)
}

export default Nav
