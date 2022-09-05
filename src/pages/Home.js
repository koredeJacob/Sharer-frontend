import React, { useContext } from 'react'
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
		<div className='w-11/12 py-6 px-6 flex flex-col border-4 border-black mx-auto mt-10 items-center justify-center md:w-9/12 md:flex-row md:flex-wrap md:justify-evenly md:text-lg'>
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
		</div>
	)
}

export default Home
