import React from 'react'
import { Link } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'

const Postpreview = ({ postid, postcontent }) => {
	return (
		<div className='w-full flex flex-col mb-3 border border-gray-600 rounded space-y-1.5 justify-center items-center md:w-5/12'>
			<div className='w-full flex justify-between items-center'>
				<div className='ml-4'>
					<img
						src={`${postcontent.profilePicture}`}
						className='w-9 rounded-full'
					/>
				</div>
				<h5>{postcontent.profileName}</h5>
				<p>{`${formatDistanceToNow(postcontent.postDate, {
					addSuffix: true
				})}`}</p>
			</div>
			<div className='w-full px-2 py-2 flex flex-col space-y-2 md:space-y-3'>
				<h3 className='leading-5'>{postcontent.postTitle}</h3>
				<p className='line-clamp-4 text-start leading-5 whitespace-pre-wrap'>
					{postcontent.postContent}
				</p>
			</div>
		</div>
	)
}

export default Postpreview
