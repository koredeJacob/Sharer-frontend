import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { httpGetPosts, httpUpdatePost } from './requests'
import posts from '../post.json'

const usePost = (user) => {
	const [Posts, setPosts] = useState(posts)
	const navigate = useNavigate()

	const getPosts = async () => {
		const fetchedPosts = await httpGetPosts()
		//setPosts(fetchedPosts)
	}

	const updateLikes = async (id) => {
		const mutatedpost = Posts.filter((post) => {
			return post.postId === id
		})
		const mutatedset = new Set(mutatedpost[0].likes)
		if (mutatedset.has(user)) {
			mutatedset.delete(user)
		} else {
			mutatedset.add(user)
		}
		mutatedpost[0].likes = [...mutatedset]
		const updatedposts = Posts.map((post) => {
			if (post.postId === id) {
				post.likes = [...mutatedset]
			}
			return post
		})
		setPosts(updatedposts)
		await httpUpdatePost(mutatedpost)
	}

	useEffect(() => {
		if (!user) {
			navigate('/signin')
			return
		}
		getPosts()
	}, [user])

	return {
		Posts,
		updateLikes
	}
}

export default usePost
