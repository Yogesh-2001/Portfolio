import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

const Pagination = ({total, showPerPage, onPaginationChange }) => {
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        const value = showPerPage * counter;
        const start = value - showPerPage;
        const end = value;
        onPaginationChange(start, end)
    }, [counter])

    const onButtonClick = (type) => {
        if (type === "prev") {
            if (counter === 1) {
                setCounter(1);
            } else {
                setCounter(counter - 1);
            }
        }else if(type ==="next"){
            if(Math.ceil(total/showPerPage)=== counter){
                setCounter(counter)
            }
            else{
                setCounter(counter+1)
            }
           
        }

    }

    return (
        <section className='mt-3 d-flex justify-content-between col-11 mx-auto'>
            <Button variant='contained' color='primary' onClick={() => onButtonClick("prev")}>Previous</Button>
            <Button variant='contained' color='primary' onClick={() => onButtonClick("next")}>Next</Button>
        </section>
    )
}

export default Pagination