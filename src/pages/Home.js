import React, { useContext } from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox'
import { AppContext } from '../App-provider'
import usePost from '../hooks/usePost'
import Postpreview from '../components/Postpreview'

const Home = () => {
	const { user, ProfilePic } = useContext(AppContext)
	const { Posts, updateLikes } = usePost(user)

	if (!Posts) {
		return <p>Loading...</p>
	}

	return (
		<div className='w-11/12 relative py-6 px-6 flex flex-col border-4 border-black mx-auto mt-10 items-center justify-center md:w-9/12 lg:w-8/12 xl:w-5/12 md:flex-wrap md:justify-evenly md:text-lg'>
			<div className='w-11/12 flex fixed z-10 bg-zinc-300 opacity-[.97] top-0 p-1.5 justify-between items-center mb-6 md:w-9/12 lg:w-8/12 xl:w-6/12'>
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
			{Posts.map((post) => {
				return (
					<Postpreview
						key={post.postId}
						postid={post.postId}
						postcontent={post}
						updateLikes={updateLikes}
					/>
				)
			})}
			<div className='fixed top-[89vh] left-[75%] z-10'>
				<AddBoxIcon color='primary' sx={{ fontSize: '50px' }} />
			</div>
		</div>
	)
}

export default Home
