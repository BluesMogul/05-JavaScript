import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";


const DisplayAll = (props) => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/book')
            .then((res) => {
                setBooks(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <div>
                <p className="displayAllSubTitle">BEHOLD &#8212; OUR CATALOG OF SNOOTY BOOKS!</p>
            </div>
            <div className="container">
                <table className="table table-bordered table-secondary table-striped">
                    <thead>
                        <tr>
                            <th width="40%" scope="col">BOOK TITLE</th>
                            <th width="20%" scope="col">BOOK AUTHOR</th>
                            <th width="6%" scope="col">PAGES</th>
                            <th width="10%" scope="col">PUBLISHED</th>
                            <th scope="col">AVAILABLE</th>
                            <th width="13%" scope="col">DETAILS</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {books.map((book) => {
                            return (
                                <tr key={book._id} class="align-middle">
                                    <td className="leftText">{book.title}</td>
                                    <td className="leftText">{book.author}</td>
                                    <td>{book.totalPages}</td>
                                    <td>{book.yearPublished}</td>
                                    <td>
                                        <div className="centerCell">
                                        {book.isAvailable ? <p className="tableText">Yes | <Link to={`/update/book/${book._id}/${book.title}`} state={'update'}>Edit</Link></p> : <p className="tableText">No | <Link to={`/update/book/${book._id}/${book.title}`} state={'update'}>Edit</Link></p>}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="centerButton">
                                        <Link to={`/details/book/${book._id}/${book.title}`} state={'details'}>
                                        <button className="detailButton">Book Details</button>
                                        </Link>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}
export default DisplayAll;

