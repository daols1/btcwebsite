import React from 'react'
import './UploadBlog.scss'
import { useForm } from 'react-hook-form'
import chatimg from '../../assets/shop/chatting.png'


function UploadBlog() {

    // const {register, error} = useForm({

    // })

  return (
    <div className=' container upload-form'>
        <h1>Upload a blog post 😀</h1>
        <div className='grid-2'>
            <form action="" className='upload-form'>
                <input type="text" placeholder='Titile' />
                <textarea type="text" placeholder='Body' />
                <input type="file" />
                <button className='btn bg-blue'>Submit</button>
            </form>
            <div>
                <img src={chatimg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default UploadBlog