import React from 'react'
import { useDispatch,useSelector } from 'react-redux'

const DetailBook = () => {
    const detailBookid = useSelector((state) => state.book.detailBook);
    console.log(detailBookid)

  return (
    <div>
       <h1>{book.volumeInfo.title}</h1>
            <p>Authors: {book.volumeInfo.authors.join(', ')}</p>
            <p>Date released: {book.volumeInfo.publishedDate}</p>
    </div>
  )
}

export default DetailBook
