import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { httpAddNewPost } from '../hooks/requests'
import usePost from '../hooks/usePost'

const Newpost = () => {
	const [postTitle, setpostTitle] = useState('')
	const [postContent, setpostContent] = useState('')
	const [warning, setwarning] = useState('invisible')
	const navigate = useNavigate()

	usePost()

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (postTitle === '' || postContent === '') {
			setwarning('')
			setTimeout(() => {
				setwarning('invisible')
			}, 5000)
			return
		}
		const response = await httpAddNewPost(postTitle, postContent)
		navigate('/')
	}

	return (
		<div className='w-10/12 mx-auto mt-9'>
			<form className='flex flex-col' onSubmit={handleSubmit}>
				<div>
					<label htmlFor='title' className='font-medium text-gray-300 '>
						Post Title:
					</label>
					<br />
					<input
						className='w-full bg-gray-100 rounded-[16px] px-3 mb-5 text-gray-600 border border-gray-300'
						type='text'
						name='posttitle'
						value={postTitle}
						onChange={(e) => {
							setpostTitle(e.target.value)
						}}
						id='title'
						placeholder='Post Title'
					/>
				</div>
				<div>
					<label htmlFor='content' className='font-medium text-gray-300'>
						Post Content:
					</label>
					<br />
					<textarea
						className='w-full h-44 md:h-52 bg-gray-100 rounded-[16px] px-3 px-3 text-gray-600 border border-gray-300'
						id='content'
						value={postContent}
						placeholder='Post Content'
						onChange={(e) => setpostContent(e.target.value)}
					></textarea>
				</div>
				<p className={`text-red-500 text-center text-lg mb-0.5 ${warning}`}>
					Post missing a title and some content!
				</p>
				<input
					type='submit'
					className='bg-blue-400 text-white py-1 rounded-[10px] w-7/12 mx-auto border border-blue-900 drop-shadow-xl'
					value='Post'
				/>
			</form>
		</div>
	)
}

export default Newpost
