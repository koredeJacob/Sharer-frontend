import React, { useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { formatDistanceToNow, parseISO } from 'date-fns'
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded'
import CommentIcon from '@mui/icons-material/Comment'
import DeleteIcon from '@mui/icons-material/Delete'
import Delete from '../components/delete'
import { AppContext } from '../App-provider'
import usePost from '../hooks/usePost'
import {
	httpGetPostById,
	httpUpdateLikes,
	httpAddComment,
	httpRemoveComment
} from '../hooks/requests'

const PostDetails = () => {
	const [postdetails, setpostdetails] = useState(null)
	const [Comment, setComment] = useState('')
	const [modalIsOpen, setIsOpen] = useState(false)
	const [delcomment, setdelcomment] = useState('')
	const { user } = useContext(AppContext)
	const params = useParams()

	usePost()

	const addComment = async (e) => {
		e.preventDefault()
		if (Comment !== '') {
			const response = await httpAddComment(postdetails.postId, Comment)
			if (response.status === 200) {
				setpostdetails(response.data)
				setComment('')
			}
		}
	}

	const openModal = (id) => {
		setIsOpen(true)
		setdelcomment(id)
	}
	const closeModal = () => {
		setIsOpen(false)
	}

	const updateLikes = async (id) => {
		const response = await httpUpdateLikes(id)
		if (response.status === 200) {
			setpostdetails(response.data)
		}
	}

	const deleteComment = async () => {
		const response = await httpRemoveComment(postdetails.postId, delcomment)
		if (response.status === 200) {
			setpostdetails(response.data)
		}
		closeModal()
	}

	useEffect(() => {
		const handlePostdetails = async () => {
			if (user) {
				const response = await httpGetPostById(params.id)
				if (response.status === 200) {
					setpostdetails(response.data)
				}
			}
		}
		handlePostdetails()
	}, [])

	if (!postdetails) {
		return (
			<p className='w-[100%] mt-[40%] mx-auto text-white text-xl text-center font-medium md:mt-[26%]'>
				Loading...
			</p>
		)
	}

	const likeset = new Set(postdetails.likes)
	return (
		<div className='w-11/12 flex mx-auto mt-8 bg-gray-200 flex-col mb-4 border border-white drop-shadow-xl rounded-md space-y-1.5 justify-center items-center md:w-5/12'>
			<div className='w-full flex rounded-t-md bg-gradient-to-r justify-between from-sky-400 to-blue-600 text-slate-100 px-4 py-2 border-b border-black items-center'>
				<div className='flex gap-2 items-center '>
					<Link to={`/profile/${postdetails.userID}`}>
						<img
							src={`${postdetails.profilePicture}`}
							referrerPolicy='no-referrer'
							className='w-10 rounded-full'
							alt='profile picture'
						/>
					</Link>
					<h5 className='capitalize text-base font-medium'>{postdetails.profileName}</h5>
				</div>
				<p className='text-xs font-medium'>{`${formatDistanceToNow(parseISO(postdetails.postDate), {
					addSuffix: true
				})}`}</p>
			</div>
			<div className='w-full flex flex-col space-y-2 px-4 py-2.5 rounded-b-md bg-gray-200 text-gray-900/90 md:space-y-3'>
				<h3 className='leading-5 text-xl text-start font-medium'>{postdetails.postTitle}</h3>
				<p className='text-start text-lg font-normal leading-5 whitespace-pre-wrap'>
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
						className='w-8/12 pl-2 border border-blue-500 '
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
							<div className='flex flex-col gap-1'>
								<div className='flex items-center gap-1.5'>
									<img
										src={`${Comment.userPicture}`}
										referrerPolicy='no-referrer'
										className='w-6 rounded-full'
										alt='profile picture'
									/>
									<p className='text-lg text-gray-900 font-medium'>{Comment.userName}</p>
								</div>
								<p className='w-[100%] text-lg text-gray-900/80 leading-5'>{Comment.comment}</p>
							</div>
							{Comment.userID === user.userID && (
								<DeleteIcon
									color='primary'
									onClick={
										() =>
											openModal(Comment._id) /*deleteComment(postdetails.postId, Comment.comment)*/
									}
								/>
							)}
						</div>
					)
				})}
			</div>
			<Delete
				modalIsOpen={modalIsOpen}
				closeModal={closeModal}
				deleteComment={deleteComment}
				content='comment'
			/>
		</div>
	)
}

export default PostDetails
