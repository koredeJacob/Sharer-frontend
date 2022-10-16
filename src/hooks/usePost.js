import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { httpGetPosts, httpUpdatePost } from './requests'
import posts from '../post.json'

const usePost = (user) => {
	const [Posts, setPosts] = useState()
	const navigate = useNavigate()

	const getPosts = async () => {
		const fetchedPosts = await httpGetPosts()
		console.log(fetchedPosts)
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
		//const response = await httpUpdatePost(mutatedpost)
	}

	const deleteComment = async (postid, delcomment) => {
		const mutatedpost = Posts.filter((post) => {
			return post.postId === postid
		})
		let updatedcomments = []
		if (mutatedpost.length === 1) {
			updatedcomments = mutatedpost[0].comments.filter((singlecomment) => {
				return delcomment !== singlecomment.comment
			})
		}
		mutatedpost.comments = updatedcomments
		//to be deleted once api is ready
		const updatedposts = Posts.map((post) => {
			if (post.postId === postid) {
				post.comments = updatedcomments
			}
			return post
		})
		setPosts(updatedposts)
		//const response = await httpUpdatePost(mutatedpost)
	}

	useEffect(() => {
		if (!user) {
			navigate('/signin')
			return
		}
		console.log(7)
		getPosts()
	}, [user])

	return {
		Posts,
		updateLikes,
		deleteComment
	}
}

export default usePost
