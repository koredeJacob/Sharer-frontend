import React, { useContext, useEffect } from 'react'
import GoogleIcon from '@mui/icons-material/Google'
import { signin } from '../hooks/requests'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../App-provider'

const Signin = () => {
	const { user } = useContext(AppContext)
	const navigate = useNavigate()

	useEffect(() => {
		console.log(user, 'jj')
		if (user) {
			navigate('/')
		}
	}, [])

	return (
		<div className='w-8/12 flex flex-col bg-gray-100 mx-auto mt-32 space-y-4 px-2 pb-3 pt-2 drop-shadow-xl border border-grey-900 justify-center text-xl'>
			<h4 className='font-normal text-center'>
				Welcome To <span className='text-xl font-bold'>IdeaShare</span>😊.A website to share
				knowledge and discuss ideas.
			</h4>
			<div className='flex justify-center'>
				<Link reloadDocument to='/v1/auth/google'>
					<button className=' flex space-x-2 px-2 py-0.5 justify-center items-center rounded-md font-bold bg-blue-400'>
						<GoogleIcon color='action' />
						<p>Signin with google</p>
					</button>
				</Link>
			</div>
		</div>
	)
}

export default Signin
