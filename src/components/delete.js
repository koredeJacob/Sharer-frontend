import React, { useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const custtomStyles = {
	content: {
		top: '50%',
		left: '50%',
		bottom: 'auto',
		right: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%,-50%)'
	}
}

const Delete = ({ modalIsOpen, content, closeModal }) => {
	return (
		<div>
			<Modal
				style={custtomStyles}
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				contentLabel='example modal'
			>
				<div className='flex flex-col gap-2 text-gray-600'>
					<p className='font-medium text-lg'>are you sure you want to delete {content}?</p>
					<div className='flex gap-3 items-center justify-end text-md font-medium'>
						<button className='border border-black px-1.5 pb-1 rounded-md ' onClick={closeModal}>
							cancel
						</button>
						<button className='border border-black px-1.5 pb-1 rounded-md bg-red-600 text-white'>
							delete
						</button>
					</div>
				</div>
			</Modal>
		</div>
	)
}

export default Delete
