
db.json:

{
  "book": [
    {
      "id": 1,
      "title": "The Lost Chronicles",
      "author": "Emily Winters"
    },
    {
      "id": 2,
      "title": "Echoes of the Past",
      "author": "James Parker"
    },
    {
      "id": 3,
      "title": "Whispers of the Night",
      "author": "Sophia Greene"
    },
    {
      "id": 4,
      "title": "Journey to the Unknown",
      "author": "Liam Carter"
    },
    {
      "id": 5,
      "title": "The Hidden Truth",
      "author": "Ava Thompson"
    },
    {
      "id": 6,
      "title": "Beneath the Surface",
      "author": "Oliver Smith"
    },
    {
      "id": 7,
      "title": "The Final Frontier",
      "author": "Isabella Lee"
    },
    {
      "id": "130f",
      "title": "Life of Pi",
      "author": "Ang Lee"
    }
  ]
}

export default GetDemo;

import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

export default instance;



import { useEffect, useState } from 'react';
import Axios from 'axios';

const GetDemo = () => {
    const [books, setBooks] = useState([]);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = () => {
        Axios.get('http://localhost:3000/book') // Changed 'books' to 'book'
            .then(res => {
                const transformedData = res.data.map(book => ({ // Changed res.data.data to res.data
                    id: book.id,
                    title: book.title,
                    author: book.author
                }));
                setBooks(transformedData);
            })
            .catch(err => console.error('Error fetching books:', err));
    };

    const addNewBook = () => {
        const newBook = { title, author };
        Axios.post('http://localhost:3000/book', newBook) // Changed 'books' to 'book'
            .then(res => {
                // Assign the new ID based on the existing books array
                setBooks([...books, { ...newBook, id: books.length + 1 }]); // This works if the server returns the new book with an ID
            })
            .catch(err => console.error('Error adding book:', err));
        setTitle(''); // Clear input
        setAuthor(''); // Clear input
    };

    const deleteBook = (id) => {
        if (window.confirm("Are you sure you want to delete this book?")) {
            Axios.delete(http://localhost:3000/book/${id}) // Changed 'books' to 'book'
                .then(() => {
                    setBooks(books.filter(book => book.id !== id));
                })
                .catch(err => console.error('Error deleting book:', err));
        }
    };

    return (
        <div>
            <h1>Books</h1>
            <h2>Add New Book</h2>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />
            <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Author"
            />
            <button onClick={addNewBook}>Add New</button>
           
            <h2>Book List</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>
                                <button onClick={() => deleteBook(book.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
