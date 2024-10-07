import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom'

const BookDetails = (props) => {
    const { id } = useParams();
    const [book, setBook] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/book/${id}`)
            .then((res) => {
                setBook(res.data);
            })
            .catch((err) => {
                console.log(err);
        })
    }, [])

    const deleteBook = (id) => {
        axios.delete(`http://localhost:8000/api/book/${id}`)
            .then(() => navigate('/'))
            .catch((err) => console.log(err))
    }

    return (
        <>
            <div className="formHeader">
                <p className="subTitle">DETAILS FOR THE BOOK: <i>{book.title}</i></p>
            </div>
            <div className="formContainer">
                <div className="mb-3">
                    <div className="inputAlign">
                        <label className="input-group-addon">Title:</label>
                        <input type="text" value={book.title} className="form-control" disabled></input>
                    </div>
                <br />
                    <div className="inputAlign">
                        <label className="input-group-addon">Author:</label>
                        <input type="text" value={book.author} className="form-control" disabled></input>
                    </div>
                <br />
                    <div className="inputAlign">
                        <label class="input-group-addon">Published:</label>
                        <input type="text" value={book.yearPublished} className="form-control" disabled></input>
                    </div>
                <br />
                    <div className="inputAlign">
                        <label className="input-group-addon">Pages:</label>
                        <input type="text" value={book.totalPages} className="form-control" disabled></input>
                    </div>
                <br />
                    <div className="inputAlign">
                        <label className="input-group-addon">Available:</label>
                        <input type="text" class="form-control"
                                value={
                                    book.isAvailable?
                                        "Yes" :
                                        "No"
                                    } disabled></input>
                    </div>
                <br />
                    <div className="formButtonBox">
                        <Link className="formButton" to={`/update/book/${book._id}/${book.title}`} state={'update'}>
                            Edit Details
                        </Link>
                        <button className="formButton" onClick={() => deleteBook(book._id)}>Delete Book</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookDetails