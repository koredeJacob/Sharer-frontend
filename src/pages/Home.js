import React, { useContext } from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox'
import { AppContext } from '../App-provider'
import usePost from '../hooks/usePost'
import Postpreview from '../components/Postpreview'

const Home = () => {
	const { user } = useContext(AppContext)
	const { Posts, updateLikes } = usePost(user)

	if (!Posts) {
		return <p>Loading...</p>
	}

	return (
		<div className='w-11/12 py-6 px-6 flex flex-col border-4 border-black mx-auto mt-10 items-center justify-center md:w-9/12 lg:w-8/12 xl:w-5/12 md:flex-wrap md:justify-evenly md:text-lg'>
			<div></div>
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
			<div className='fixed top-[88vh] left-[70%]'>
				<AddBoxIcon color='primary' sx={{ fontSize: '50px' }} />
			</div>
		</div>
	)
}

export default Home
