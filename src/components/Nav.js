import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../App-provider'
import { httpsignout } from '../hooks/requests'

const Nav = ({ ProfilePic }) => {
	const { user, updateUser, updatePosts } = useContext(AppContext)
	const navigate = useNavigate()

	const signout = async () => {
		await httpsignout()
		updatePosts(null)
		updateUser(null)
		navigate('/signin')
	}

	return (
		<div className='w-[100vw] flex fixed z-10 bg-zinc-300 opacity-[.97] top-0 py-1.5 px-4 justify-between items-center mb-6 md:w-[100vw] md:justify-around'>
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
			<h2 className='text-2xl font-medium text-gray-700'>sharer</h2>
			<button
				onClick={signout}
				className='text-lg text-gray-700 font-normal drop-shadow-lg border border-gray-700 bg-blue-500 px-2 py-1.5 rounded-md'
			>
				sign out
			</button>
		</div>
	)
}

export default Nav
