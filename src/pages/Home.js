import React, { useContext, useEffect } from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox'
import { AppContext } from '../App-provider'
import usePost from '../hooks/usePost'
import Postpreview from '../components/Postpreview'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'

const Home = () => {
	const { user, Posts } = useContext(AppContext)
	const { updateLikes, getPosts } = usePost()

	useEffect(() => {
		const handlePosts = async () => {
			if (user) {
				await getPosts()
			}
		}
		handlePosts()
	}, [])

	if (!Posts) {
		return (
			<p className='w-[25%] mt-[40%] mx-auto text-xl text-center font-medium md:mt-[26%]'>
				Loading...
			</p>
		)
	}

	return (
		<div className='w-12/12 relative py-6 px-6 flex flex-col border-4 border-black mx-auto mt-10 items-center justify-center md:w-9/12 lg:w-8/12 xl:w-5/12 md:flex-wrap md:justify-evenly md:text-lg'>
			<Nav ProfilePic={user.profilePicture} />
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
				<Link to='/newpost'>
					<AddBoxIcon color='primary' sx={{ fontSize: '50px' }} />
				</Link>
			</div>
		</div>
	)
}

export default Home
