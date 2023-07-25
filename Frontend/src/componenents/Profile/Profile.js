import React, { useState } from 'react';
import './Profile.css';

import { Link } from 'react-router-dom';

const Profile = ({ history }) => {
  const [books, setBooks] = useState([]);
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [editingBookIndex, setEditingBookIndex] = useState(-1);

  const handleAddBook = () => {
    if (author.trim() === '' || title.trim() === '') {
      return;
    }

    const newBook = {
      author: author,
      title: title,
    };

    setBooks(prevBooks => [...prevBooks, newBook]);
    setAuthor('');
    setTitle('');
  };

  const handleDeleteBook = index => {
    setBooks(prevBooks => prevBooks.filter((book, i) => i !== index));
  };

  const handleEditBook = index => {
    if (index === editingBookIndex) {
      setEditingBookIndex(-1);
    } else {
      setEditingBookIndex(index);
    }
  };

  const handleSaveBook = index => {
    setEditingBookIndex(-1);
  };

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col mt-5'>
            <div className='card m-auto ' style={{ width: '50%' }}>
              {/* <img src={pic} className='card-img-top' alt='...' /> */}
              <div className='card-body'>
                <h5 className='card-title'>email</h5>
                <p className='card-text'>name</p>
                <Link to='/user-update' className='btn btn-primary'>
                  Update your profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Table */}
      <table className='table table-hover'>
        <thead>
          <tr>
            <th scope='col'>Author</th>
            <th scope='col'>Book Name</th>
            <th scope='col'>Delete</th>
            <th scope='col'>Update</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index} className='table-dark'>
              <th scope='row'>
                {editingBookIndex === index ? (
                  <input
                    type='text'
                    value={book.author}
                    onChange={e => handleSaveBook(index)}
                  />
                ) : (
                  book.author
                )}
              </th>
              <td>
                {editingBookIndex === index ? (
                  <input
                    type='text'
                    value={book.title}
                    onChange={e => handleSaveBook(index)}
                  />
                ) : (
                  book.title
                )}
              </td>
              <td>
                <button type='button' onClick={() => handleDeleteBook(index)}>
                  Delete
                </button>
              </td>
              <td>
                {editingBookIndex === index ? (
                  <button type='button' onClick={() => handleSaveBook(index)}>
                    Save
                  </button>
                ) : (
                  <button type='button' onClick={() => handleEditBook(index)}>
                    Update
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Add Book Form */}
      <div className='container'>
        <div className='row'>
          <div className='col mt-5'>
            <form onSubmit={e => e.preventDefault()}>
              <div className='form-group'>
                <label htmlFor='author'>Author</label>
                <input
                  type='text'
                  className='form-control'
                  id='author'
                  value={author}
                  onChange={e => setAuthor(e.target.value)}
                  placeholder='Enter Author'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='title'>Title</label>
                <input
                  type='text'
                  className='form-control'
                  id='title'
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  placeholder='Enter Title'
                />
              </div>
              <button type='button' className='btn btn-info' onClick={handleAddBook}>
                Add Book
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
