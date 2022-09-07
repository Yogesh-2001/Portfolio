import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Typography,Modal,Fade,Backdrop } from '@material-ui/core'
import Pagination from './Pagination'

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([])
  const [showPerPage,setShowPerPage] = useState(8);
  const [open, setOpen] = useState(false);
  const [blog,setBlog] = useState()
  const [id,setId] = useState()
  const [pagination,setPagination] = useState({
    start:0,
    end:showPerPage
  })

  useEffect(() => {
    const allBlogs = async () => {
      const bl = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      setBlogs(bl.data)
    }

    allBlogs();
  }, [])
 
  useEffect(()=>{
    const getBlog = async()=>{
      const bl = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setBlog(bl.data)
    }

    id && getBlog()
  },[id])


  const onPaginationChange = (start,end)=>{
    setPagination({
      start:start,
      end:end
    })
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = (id) => {
    setId(id)
    setOpen(true);
  };
  
  return (
    <>
     <main className='outer-box'>
     <Typography variant='h5' className='text-center'>Blogs Section</Typography>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        style={{display:'flex',alignItems:'center',justifyContent:'center'}}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className='modal-box'>
            <h4 className='modal-id' >{blog?.id}</h4>
            <Typography variant='h6' style={{lineHeight:'23px',marginBottom:'5px'}} id="transition-modal-title" color='primary'>{blog?.title}</Typography>
            <Typography  id="transition-modal-description">{blog?.body}</Typography>
          </div>
        </Fade>
      </Modal>
      <section className='cards col-11 mx-auto'>
       
        {
          blogs.slice(pagination.start,pagination.end).map((blog) => (
            <>
              <div className='card my-3 p-2'>
                <p style={{fontSize:'24px',color:'black',lineHeight:'24px',margin:'0px',textAlign:'center'}}>{blog.title.substring(0, 50) + "..."}</p>
                <Typography color='textSecondary'>{blog.body.substring(0, 170) + "..."}</Typography>
                <Button variant='outlined' color='primary' onClick={()=>handleOpen(blog.id)} >Read More</Button>
              </div>
            </>
          ))
        }
      </section>
      <Pagination total={blogs.length} showPerPage={showPerPage} onPaginationChange={onPaginationChange}/>
     </main>
      
    </>
  )
}

export default AllBlogs