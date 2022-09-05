import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded'
import CommentIcon from '@mui/icons-material/Comment'
import { AppContext } from '../App-provider'
import usePost from '../hooks/usePost'

const PostDetails = () => {
	const params = useParams()
	const user = useContext(AppContext)
	const { Posts, updateLikes } = usePost(user)
	let postdetails = null
	const navigate = useNavigate()

	if (Posts) {
		const postarray = Posts.filter((post) => {
			return post.postId === Number(params.id)
		})
		if (postarray.length === 1) {
			postdetails = postarray[0]
		}
	}

	if (!postdetails) {
		return <p>post cannot be found</p>
	}

	const likeset = new Set(postdetails.likes)
	return (
		<div className='w-full flex bg-gray-200 flex-col mb-4 border border-gray-600 rounded-md space-y-1.5 justify-center items-center md:w-5/12'>
			<div className='w-full flex rounded-t-md bg-gradient-to-r from-sky-400 to-blue-600 text-slate-100 px-4 pt-2 pb-1 border-b border-black items-center'>
				<div>
					<img
						onClick={() => navigate(`/profile/${postdetails.userID}`)}
						src={`${postdetails.profilePicture}`}
						referrerPolicy='no-referrer'
						className='w-9 rounded-full'
						alt='profile picture'
					/>
				</div>
				<h5 className='ml-3 capitalize text-base font-medium'>{postdetails.profileName}</h5>
				<p className='ml-16 pl-2 md:ml-24 text-xs font-medium'>{`${formatDistanceToNow(
					postdetails.postDate,
					{
						addSuffix: true
					}
				)}`}</p>
			</div>
			<div className='w-full px-4 py-2 rounded-b-md bg-gray-200 text-gray-900/90 flex flex-col space-y-2 md:space-y-3'>
				<h3 className='leading-5 text-xl font-medium'>{postdetails.postTitle}</h3>
				<p className='text-start text-base leading-5 whitespace-pre-wrap'>
					{postdetails.postContent}
				</p>
			</div>
			<div className='w-full flex px-4 py-0.5 justify-start space-x-6 border-t border-black'>
				<div className='flex space-x-1'>
					<ThumbUpAltRoundedIcon
						color={`${likeset.has(user) ? 'primary' : 'disabled'}`}
						onClick={() => updateLikes(postdetails.postId)}
					/>
					<p className='text-gray-600/75 text-base  font-medium'>{postdetails.likes.length}</p>
				</div>
				<div className='flex space-x-1'>
					<CommentIcon color='disabled' />
					<p className='text-gray-600/75 text-base  font-medium'>{postdetails.comments.length}</p>
				</div>
			</div>
		</div>
	)
}

export default PostDetails
