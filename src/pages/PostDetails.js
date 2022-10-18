import React, { useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { formatDistanceToNow, parseISO } from 'date-fns'
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded'
import CommentIcon from '@mui/icons-material/Comment'
import DeleteIcon from '@mui/icons-material/Delete'
import Delete from '../components/delete'
import { AppContext } from '../App-provider'
import usePost from '../hooks/usePost'
import { httpGetPostById, httpUpdateLikes } from '../hooks/requests'

const PostDetails = () => {
	const [postdetails, setpostdetails] = useState(null)
	const [Comment, setComment] = useState('')
	const [modalIsOpen, setIsOpen] = useState(false)
	const params = useParams()
	const { user, Posts } = useContext(AppContext)

	usePost()

	const addComment = (e) => {
		e.preventDefault()
		console.log(6)
	}

	const openModal = () => {
		setIsOpen(true)
	}
	const closeModal = () => {
		setIsOpen(false)
	}

	const updateLikes = async (id) => {
		const response = await httpUpdateLikes(id)
		setpostdetails(response.data)
	}

	useEffect(() => {
		const handlePostdetails = async () => {
			const response = await httpGetPostById(params.id)
			setpostdetails(response.data)
		}
		handlePostdetails()
	}, [])
	/*if (Posts) {
		console.log(Posts)
		const postarray = Posts.filter((post) => {
			return post.postId === Number(params.id)
		})
		if (postarray.length === 1) {
			postdetails = postarray[0]
		}
	}
*/
	if (!postdetails) {
		return <p>Loading...</p>
	}

	const likeset = new Set(postdetails.likes)
	return (
		<div className='w-11/12 flex mx-auto mt-8 bg-gray-200 flex-col mb-4 border border-gray-600 drop-shadow-xl rounded-md space-y-1.5 justify-center items-center md:w-5/12'>
			<div className='w-full flex rounded-t-md bg-gradient-to-r from-sky-400 to-blue-600 text-slate-100 px-4 pt-2 pb-1 border-b border-black items-center'>
				<div>
					<Link to={`/profile/${postdetails.userID}`}>
						<img
							src={`${postdetails.profilePicture}`}
							referrerPolicy='no-referrer'
							className='w-10 rounded-full'
							alt='profile picture'
						/>
					</Link>
				</div>
				<h5 className='ml-3 capitalize text-base font-medium'>{postdetails.profileName}</h5>
				<p className='ml-14 pl-3 md:ml-24 lg:ml-44 text-xs font-medium'>{`${formatDistanceToNow(
					parseISO(postdetails.postDate),
					{
						addSuffix: true
					}
				)}`}</p>
			</div>
			<div className='w-full flex flex-col space-y-2 px-4 py-2.5 rounded-b-md bg-gray-200 text-gray-900/90 md:space-y-3'>
				<h3 className='leading-5 text-xl text-start font-medium'>{postdetails.postTitle}</h3>
				<p className='text-start text-base leading-5 whitespace-pre-wrap'>
					{postdetails.postContent}
				</p>
			</div>
			<div className='w-full flex px-4 py-0.5 justify-start space-x-6 border-t border-black'>
				<div className='flex space-x-1'>
					<ThumbUpAltRoundedIcon
						color={`${likeset.has(user.userID) ? 'primary' : 'disabled'}`}
						onClick={() => updateLikes(postdetails.postId)}
					/>
					<p className='text-gray-600/75 text-base  font-medium'>{postdetails.likes.length}</p>
				</div>
				<div className='flex space-x-1'>
					<CommentIcon color='disabled' />
					<p className='text-gray-600/75 text-base  font-medium'>{postdetails.comments.length}</p>
				</div>
			</div>
			<div className='w-[94%]'>
				<form onSubmit={addComment} className='w-full flex flex-row justify-start space-x-4 '>
					<input
						type='text'
						value={Comment}
						onChange={(e) => setComment(e.target.value)}
						placeholder=' Add Comment'
						maxLength={120}
						className='w-8/12 border border-blue-500 '
					/>
					<input
						value='comment'
						type='submit'
						className='bg-blue-500 px-3 py-0.5 pb-1 text-lg rounded-md text-white hover:bg-blue-600'
					/>
				</form>
			</div>
			<div className='w-full flex flex-col space-y-2 border border-t-black py-3 justify-start items-center'>
				{postdetails.comments.map((Comment, i) => {
					return (
						<div
							key={i}
							className=' w-[90%] flex justify-between items-center border border-b-gray-400 pb-1 '
						>
							<p className='w-[80%] text-md text-gray-900/80 leading-5'>{Comment.comment}</p>
							{Comment.userID === user.userID && (
								<DeleteIcon
									color='primary'
									onClick={() => openModal() /*deleteComment(postdetails.postId, Comment.comment)*/}
								/>
							)}
						</div>
					)
				})}
			</div>
			<Delete modalIsOpen={modalIsOpen} closeModal={closeModal} />
		</div>
	)
}

export default PostDetails
