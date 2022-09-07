import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'

const Feedback = () => {
    const [form, setForm] = useState({
        name: "",
        date: "",
        feedback_title: "",
        description: "",
        gender: 'male',

    })
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Form Data",form);
    }
    return (
        <>
            <section className='feedback col-lg-11 mx-auto my-4'>
                <Typography variant='h4' className='text-center my-3'>FeedBack Form</Typography>
                <form onSubmit={handleSubmit} className='col-md-6 col-lg-4 mx-auto'>
                    <TextField
                        type={'text'}
                        variant='outlined'
                        name='name'
                        onChange={handleChange}
                        value={form.name}
                        className='col-12 my-2'
                        label='Name' placeholder='Enter name'
                    />
                    <FormControl component="fieldset" className='col-12  py-3' >
                        <FormLabel component="legend">Gender </FormLabel>
                        <RadioGroup row aria-label="gender" name='gender' value={form.gender} onChange={handleChange}>
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                        </RadioGroup>
                    </FormControl>
                    <TextField
                        type="date"
                        name='date'
                        onChange={handleChange}
                        value={form.date}
                        defaultValue="2017-05-22"
                        className='col-12 my-1'
                    />
                    <TextField
                        type={'text'}
                        variant='outlined'
                        name='feedback_title'
                        onChange={handleChange}
                        value={form.feedback_title}
                        className='col-12 my-2'
                        label='Feedback Title'
                        placeholder='Enter title'

                    />

                    <TextField
                        label="Message"
                        multiline
                        rows={4}
                        name='description'
                        onChange={handleChange}
                        value={form.description}
                        className='col-12 my-3'
                        placeholder="write your message"
                        variant="outlined"
                    />
                    <Button className='col-12' variant='contained' color='primary'  type='submit'>Submit</Button>
                </form>
            </section>
        </>
    )
}

export default Feedback