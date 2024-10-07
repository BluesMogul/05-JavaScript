import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

const UpdateBookForm = (props) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [yearPublished, setYearPublished] = useState(2024);
    const [totalPages, setTotalPages] = useState("");
    const [isAvailable, setIsAvailable] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/book/${id}`)
            .then((res) => {
                setTitle(res.data.title)
                setAuthor(res.data.author)
                setYearPublished(res.data.yearPublished)
                setTotalPages(res.data.totalPages)
                setIsAvailable(res.data.isAvailable)
            })
            .catch((err) => {
            console.log(err);
        })
    }, [])

    const [formErrors, setFormErrors] = useState({
        title: "Book title is required!",
        author: "Book author is required",
        yearPublished: "Year book was published is required",
        totalPages: "Total number of pages is required!",
    });

    const titleHandler = (e) => {
        setTitle(e.target.value);
        const value = e.target.value.trim();
        let errorMsg = "";

        if (value) {
            if (value.length < 2) {
                errorMsg = "Book title must be at least 2 characters long!";
            } else if (value.length > 255) {
                errorMsg = "Book title  cannot be more than 255 characters long!";
            }
        } else {
            errorMsg = "Book title is required!"
        }
        setFormErrors({ ...formErrors, title: errorMsg });
    }

    const authorHandler = (e) => {
        setTitle(e.target.value);
        const value = e.target.value.trim();
        let errorMsg = "";

        if (value) {
            if (value.length < 2) {
                errorMsg = "Author's name must be at least 2 characters long!";
            } else if (value.length > 255) {
                errorMsg = "Author's name cannot be more than 255 characters long!";
            }
        } else {
            errorMsg = "Author's name is required!"
        }
        setFormErrors({ ...formErrors, author: errorMsg });
    }

    const yearPublishedHandler = (e) => {
        setTitle(e.target.value);
        const value = e.target.value.trim();
        let errorMsg = "";

        if (value) {
            if (value.length < 1) {
                errorMsg = "Year published must be at least one character!";
            } else {
                errorMsg = "Year published  name is required!"
            }
        } else {
            errorMsg = "";
        }
        setFormErrors({ ...formErrors, yearPublished: errorMsg });
    }

    const totalPagesHandler = (e) => {
        setTitle(e.target.value);
        const value = e.target.value.trim();
        let errorMsg = "";

        if (value) {
            if (value.length <= 0) {
                errorMsg = "Total pages must be greater than 0!";
            } else {
                errorMsg = "";
            }
        } else {
            errorMsg = "";
        }
        setFormErrors({ ...formErrors, totalPages: errorMsg });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const updatedBook = { //Creates a newBook object to be passed to the DB
            title,
            author,
            yearPublished,
            totalPages,
            isAvailable
        }
        // The 2nd argument (newBook) in the api call (post/put/patch, etc.) ALWAYS becomes the body in the controller (req.body)
        axios.put(`http://localhost:8000/api/book/${id}`, updatedBook) // This becomes the req.body that is sent to the DB
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                setErrors(err.response.data.errors);
        })
    }

    return (
        <>
            <div className="formHeader">
                <p className="subTitleHeader">UPDATE BOOK DETAILS BELOW</p>
        </div>
        <div className="formContainer">
            <form onSubmit={submitHandler}>
                    <div className="mb-3">
                        <div className="inputAlign">
                            <label  className="input-group-addon">Title:</label>
                            <input type="text" value={title} class="form-control" name="title"
                                onChange={(e) => { setTitle(e.target.value); }} placeholder="New Book Title" />

                            {/* front-end errors
                            {formErrors.title && (
                                <p className="errorText">{formErrors.title}</p>
                            )} */}

                            {/* back-end errors */}
                            {errors.title ? <p className="errorText">{errors.title.message}</p> : null}
                        </div>
                        <br />
                        <div className="inputAlign">
                            <label className="input-group-addon">Author:</label>
                            <input type="text" value={author} className="form-control" name="author"
                            onChange={(e) => { setAuthor(e.target.value); }} placeholder="Book Author" />

                            {/* front-end errors
                            {formErrors.author && (
                                <p className="errorText">{formErrors.author}</p>
                            )} */}

                            {/* back-end errors */}
                            {errors.author ? <p className="errorText">{errors.author.message}</p> : null}
                        </div>
                    <br />
                        <div className="inputAlign">
                            <label className="input-group-addon">Published:</label>
                            <input type="text" value={yearPublished} class="form-control" name="yearPublished"
                            onChange={(e) => { setYearPublished(e.target.value); }} placeholder="Year of Publication" />

                            {/* front-end errors
                            {formErrors.yearPublished && (
                                <p className="errorText">{formErrors.yearPublished}</p>
                            )} */}

                            {/* back-end errors */}
                            {errors.author ? <p className="errorText">{errors.author.message}</p> : null}
                        </div>
                <br />
                        <div className="inputAlign">
                            <label className="input-group-addon">Pages:</label>
                            <input type="number" value={totalPages} class="form-control" name="totalPages"
                            onChange={(e) => { setTotalPages(e.target.value); }} placeholder="Total Pages" />

                            {/* front-end errors
                            {formErrors.totalPages && (
                                <p className="errorText">{formErrors.totalPages}</p>
                            )} */}

                            {/* back-end errors */}
                            {errors.totalPages ? <p className="errorText">{errors.totalPages.message}</p> : null}
                            </div>
                <br />
                    <div className="alignLeft">
                        <div class="checkbox-inline">
                            <input type="checkbox" class="form-check-input" value={isAvailable} checked={isAvailable}
                                onChange={() => { setIsAvailable(!isAvailable); }} />
                            <label class="checkbox-inline">&nbsp; Check If This Book Is Available to Borrow</label>
                        </div>
                    </div>
                </div>
                <div className="formButtonBox">
                    <button class="navButton">Update Book</button>
                </div>
            </form>
        </div>
        </>

)}

export default UpdateBookForm