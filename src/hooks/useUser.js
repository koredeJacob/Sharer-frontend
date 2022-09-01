import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { httpGetPosts } from './requests'
import posts from '../post.json'

const useUser = (user) => {
	const [Posts, setPosts] = useState(posts)
	const navigate = useNavigate()

	const getPosts = async () => {
		const fetchedPosts = await httpGetPosts()
		//setPosts(fetchedPosts)
	}

	useEffect(() => {
		if (!user) {
			navigate('/signin')
			return
		}
		getPosts()
	}, [user])

	return {
		Posts
	}
}
export default useUser
