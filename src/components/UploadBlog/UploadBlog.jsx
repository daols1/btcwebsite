import React, {useState} from 'react'
import './UploadBlog.scss'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import chatimg from '../../assets/shop/chatting.png'
import { ToastContainer, toast } from 'react-toastify';


function UploadBlog() {

    const [form, setForm] = useState ({})
    const [image, setImage] = useState ()

    
    const toaster = (msg) => {
        toast(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
    }
    
    const mutation = useMutation({
        mutationFn: (form) => {
            return axios.post('http://localhost:1337/api/blogs', form)
        },
    })

    const {register, formState, handleSubmit} = useForm({
        defaultValues:{
            title: "",
            body:"",
            fileLink: ""
        }
    })

    const formError = formState.errors

    const imageUpload = (files) => {
        const formData = new FormData()
        formData.append("file", files[0])
        formData.append("upload_preset", "kg61l5cg")

        const poster = async() => {await axios.post("https://api.cloudinary.com/v1_1/dvggv05od/image/upload", formData).then((response) => {setImage(response.data.secure_url)})} 
        toast.promise(
            poster,
            {
                pending: 'Uploading image...',
                success: 'Image Added 👌',
                error: 'Error somthing don happed! 🤯'
            }
        )
    }
    
    const submitHandler = async (data, event) => {
        // setForm(data)
        console.log(data)
        await mutation.mutate({
                "data":
                    {
                        "title": data.title,
                        "body": data.body, 
                        "fileLink": image,
                    }
                })
        if (mutation.isLoading) { return toaster("Posting... hold on!"); }
        if (mutation.isError) { return toaster(`Error: ${mutation.error.message}`); }
        if (mutation.isSuccess) { return toaster("Successfully Posted! 😀"); }
        event.preventDefault();
    }

    

    
    
    

  return (
    <div className=' container upload-form'>
        <ToastContainer />
        <h1>Upload a blog post 😀</h1>
        <div className='grid-2'>
            <form 
            action="" 
            className='upload-form'
            onSubmit={handleSubmit(submitHandler)}
            >
                
                {formError.title && formError.title.type === "required" && <span className='errors'>This is required</span>}
                <input 
                type="text" 
                id='title'
                placeholder='Titile'
                {...register("title", { required: true })}
                />
                {formError.body && formError.body.type === "required" && <span className='errors'>This is required</span>}
                <textarea 
                type="text"     
                id='body'
                placeholder='body'
                {...register("body", { required: true })}
                />
                <input 
                type="file" 
                id='file'
                onChange={(event) => imageUpload(event.target.files)}
                // {...register("file")}
                />
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