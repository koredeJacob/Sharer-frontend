import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../App-provider'

const Nav = ({ ProfilePic }) => {
	const { user } = useContext(AppContext)
	return (
		<div className='w-[100vw] flex fixed z-10 bg-zinc-300 opacity-[.97] top-0 p-1.5 justify-between items-center mb-6 md:w-[100vw] md:justify-around'>
			<Link to={`/profile/${user.userID}`}>
				<div>
					<img
						src={ProfilePic}
						referrerPolicy='no-referrer'
						className='w-10 rounded-full'
						alt='profile picture'
					/>
				</div>
			</Link>
			<h2 className='text-2xl font-light text-gray-700 font-cursive'>ideashare</h2>
			<Link to='/v1/auth/logout'>
				<button className='text-lg text-gray-700 font-cursive drop-shadow-lg border border-gray-700 bg-blue-500 px-2 py-1.5 rounded-md'>
					sign out
				</button>
			</Link>
		</div>
	)
}

export default Nav
