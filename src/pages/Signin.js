import React from 'react'
import GoogleIcon from '@mui/icons-material/Google'

const Signin = () => {
	return (
		<div className='w-8/12 flex flex-col bg-gray-100 mx-auto mt-32 space-y-4 px-2 pb-3 pt-2 drop-shadow-xl border border-grey-900 justify-center text-xl'>
			<h4 className='font-normal text-center'>
				Welcome To <span className='text-xl font-bold'>IdeaShare</span>😊.A website to share
				knowledge and discuss ideas
			</h4>
			<button className=' flex space-x-2 px-2 py-0.5 items-center rounded-md font-bold bg-blue-400'>
				<GoogleIcon color='action' />
				<p>Signin with google</p>
			</button>
		</div>
	)
}

export default Signin
