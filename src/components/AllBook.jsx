import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBook } from '../Redux/slice/bookSlice';
import {  setdetailBook } from '../Redux/slice/bookSlice';
import { favoriteBook } from '../Redux/slice/counter-slice';

const AllBook = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book.books);
  useEffect(() => {
    dispatch(getBook());
  }, [dispatch]);

  const { value } = useSelector((state) => state.counter);


  
  return (
    <div>
      <h1 className="text-4xl">List of Books</h1>
      <ul className="grid grid-cols-2 gap-6">
        {books.map((book) => (
          <li key={book.id} className="bg-slate-500 rounded-lg shadow-md" >
            <div className="flex p-4">
              <div className="w-24">{book.volumeInfo.imageLinks && <img src={book.volumeInfo.imageLinks.thumbnail} alt="Book Cover" className="w-full h-auto" />}</div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold mb-2 ">Title: {book.volumeInfo.title}</h3>
                <p className="text-sm ">Authors: {book.volumeInfo.authors.join(', ')}</p>
                <p className="text-sm ">Date released: {book.volumeInfo.publishedDate}</p>
                <div className="flex justify-end ">
                  <button onClick={() => dispatch(favoriteBook(book.id))}>
                    <span className="material-symbols-outlined">book</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllBook;
