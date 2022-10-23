import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../App-provider'
import Postpreview from '../components/Postpreview'
import { httpGetUserById } from '../hooks/requests'
import usePost from '../hooks/usePost'

const Profile = () => {
	const { user, Posts } = useContext(AppContext)
	const [profileposts, setprofileposts] = useState(null)
	const [profile, setprofile] = useState(null)
	const params = useParams()
	const { updateLikes, getPosts } = usePost()

	useEffect(() => {
		const handleprofile = async () => {
			if (user) {
				const response = await httpGetUserById(params.id)
				setprofile(response.data)
			}
		}
		handleprofile()
	}, [])

	useEffect(() => {
		const handlePosts = async () => {
			if (user) {
				await getPosts()
			}
		}
		handlePosts()
	}, [])

	useEffect(() => {
		if (!Posts) {
			return
		}
		const newarr = Posts.filter((post) => {
			return post.userID === Number(params.id)
		})
		setprofileposts(newarr)
	}, [Posts])

	if (!profileposts) {
		return (
			<p className='w-[100%] mt-[40%] mx-auto text-white text-xl text-center font-medium md:mt-[26%]'>
				Loading...
			</p>
		)
	}

	return (
		<div className='flex flex-col gap-5 '>
			<div className='flex gap-3 border border-black bg-gray-200 text-gray-900 text-2xl items-center'>
				<div className='p-4'>
					<img
						src={profile.profilePicture}
						referrerPolicy='no-referrer'
						className='w-15 rounded-full'
						alt='profile picture'
					/>
				</div>
				<div>
					<p className='font-medium'>{profile.profileName}</p>
					<p className='font-normal'>{profileposts.length} Posts</p>
				</div>
			</div>
			{profileposts.length == 0 && (
				<div>
					<h2 className='text-gray-200 text-[50px] font-medium text-center mt-9'>No Posts Yet</h2>
				</div>
			)}
			<div className='w-[90%] mx-auto md:w-8/12 xl:w-6/12'>
				{profileposts.map((post) => {
					return (
						<Postpreview
							key={post.postId}
							postid={post.postId}
							postcontent={post}
							updateLikes={updateLikes}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default Profile
