import { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { httpGetPosts, httpUpdatePost, httpGetUser, httpUpdateLikes } from './requests'
import posts from '../post.json'
import { AppContext } from '../App-provider'

const usePost = () => {
	const { user, updateUser, Posts, updatePosts } = useContext(AppContext)
	const navigate = useNavigate()

	const getPosts = async () => {
		const fetchedPosts = await httpGetPosts()
		updatePosts(fetchedPosts.data)
	}

	const updateLikes = async (id) => {
		const mutatedpost = Posts.filter((post) => {
			return post.postId === id
		})
		const mutatedset = new Set(mutatedpost[0].likes)
		if (mutatedset.has(user.userID)) {
			mutatedset.delete(user.userID)
		} else {
			mutatedset.add(user.userID)
		}
		mutatedpost[0].likes = [...mutatedset]
		const updatedposts = Posts.map((post) => {
			if (post.postId === id) {
				post.likes = [...mutatedset]
			}
			return post
		})
		updatePosts(updatedposts)
		const response = await httpUpdateLikes(id)
	}

	/*useEffect(() => {
		const handleUser = async () => {
			if (!user) {
				const res = await httpGetUser()
				updateUser(res.data)
				console.log('1 ', user)
				console.log('called navigate')
				navigate('/signin')
				console.log('3', user)
			}
		}
		handleUser()
	}, [])*/

	return {
		updateLikes,
		getPosts
	}
}

export default usePost
