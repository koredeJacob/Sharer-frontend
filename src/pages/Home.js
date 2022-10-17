import React, { useContext, useEffect } from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../App-provider'
import usePost from '../hooks/usePost'
import Postpreview from '../components/Postpreview'
import Nav from '../components/Nav'

const Home = () => {
	const { user, updateUser } = useContext(AppContext)
	const { Posts, updateLikes } = usePost()
	const ProfilePic = 'hhh'
	const navigate = useNavigate()

	/*useEffect(() => {
		updateUser({ k: 7 })
		console.log(user)
	}, [])

	useEffect(() => {
		if (!user) {
			navigate('/signin')
		}
	}, [])*/

	if (!Posts) {
		return <p>Loading...</p>
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
				<AddBoxIcon color='primary' sx={{ fontSize: '50px' }} />
			</div>
		</div>
	)
}

export default Home
