import React from 'react';
import { useSelector } from 'react-redux';

const FavoriteBook = () => {
  const favoriteBooksIds = useSelector((state) => state.counter.favoriteBooks);
  const books = useSelector((state) => state.book.books);

  const favoriteBooks = books.filter((book) => favoriteBooksIds.includes(book.id));

  return (
    <div className='my-20'>
      <h1>Ini buku favoritku</h1>
      <ul>
        {favoriteBooks.map((book) => (
          <li key={book.id}>
                 <div className="flex p-4">
              <div className="w-24">{book.volumeInfo.imageLinks && <img src={book.volumeInfo.imageLinks.thumbnail} alt="Book Cover" className="w-full h-auto" />}</div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold mb-2 ">Title: {book.volumeInfo.title}</h3>
                <p className="text-sm ">Authors: {book.volumeInfo.authors.join(', ')}</p>
                <p className="text-sm ">Date released: {book.volumeInfo.publishedDate}</p>
                <div className="flex justify-end ">
                  <button onClick={() => dispatch(favoriteBooks(book.id))}>
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

export default FavoriteBook;
