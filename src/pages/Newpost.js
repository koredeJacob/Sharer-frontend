import React from 'react'

const Newpost = () => {
	return (
		<div className='w-10/12 mx-auto mt-9'>
			<form className='flex flex-col space-y-4'>
				<div>
					<label for='title' className='font-medium text-gray-500 '>
						Post Title:
					</label>
					<br />
					<input
						className='w-full bg-gray-100 rounded-[16px] px-3 text-gray-600 border border-gray-300'
						type='text'
						name='posttitle'
						id='title'
						placeholder='Post Title'
					/>
				</div>
				<div>
					<label for='content' className='font-medium text-gray-500'>
						Post Content:
					</label>
					<br />
					<textarea
						className='w-full h-44 md:h-52 bg-gray-100 rounded-[16px] px-3 px-3 text-gray-600 border border-gray-300'
						id='content'
						placeholder='Post Content'
					></textarea>
				</div>
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
