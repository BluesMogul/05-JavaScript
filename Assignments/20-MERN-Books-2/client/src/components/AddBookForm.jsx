import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewBookForm = (props) => {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [yearPublished, setYearPublished] = useState(2024)
    const [totalPages, setTotalPages] = useState('')
    const [isAvailable, setIsAvailable] = useState(false)

    // server errors
    const [errors, setErrors] = useState({})

    // client errors
    const [formErrors, setFormErrors] = useState({
        title: "What? This thing doesn't have a title?!",
        author: "We're not playing, 'Guess who wrote this!'",
        yearPublished: "When was this book published?",
        totalPages: "If you don't know for sure, guess -- it's not that serious!",
    });

    const validateForm = () => {
        console.log(Object.values(formErrors))
        return Object.values(formErrors).every(value => value === '');
    }

    const titleHandler = (e) => {
        setTitle(e.target.value);
        const value = e.target.value.trim();
        let errorMsg = "";

        if (value) {
            if (value.length < 2) {
                errorMsg = "Book title must be at least 2 characters long!";
            } else if (value.length > 255) {
                errorMsg = "Book title cannot be more than 255 characters long!";
            }
        } else {
            errorMsg = "Book title is required!"
        }
        setFormErrors({ ...formErrors, title: errorMsg });
    }

    const authorHandler = (e) => {
        setAuthor(e.target.value);
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
        setYearPublished(e.target.value);
        const value = e.target.value.trim();
        let errorMsg = "";

        if (value) {
            if (value.length < 1) {
                errorMsg = "Year published must be at least 1 characters long!";
            } else if (value.length > 4) {
                errorMsg = "Year published cannot be more than 4 characters long!";
            }
        } else {
            errorMsg = "Year published is required!"
        }
        setFormErrors({ ...formErrors, yearPublished: errorMsg });
    }

    const totalPagesHandler = (e) => {
        setTotalPages(e.target.value);
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
        const newBook = { //Creates a newBook object to be passed to the DB
            title,
            author,
            yearPublished,
            totalPages,
            isAvailable
        }
        // The 2nd argument (newBook) in the api call (post/put/patch, etc.) ALWAYS becomes the body in the controller (req.body)
        axios.post('http://localhost:8000/api/book', newBook) // This becomes the req.body that is sent to the DB
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
            <p className="subTitle">ADD YOUR NEW SNOOTY BOOK</p>
        </div>
        <div className="formContainer">
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <input type="text" value={title} className="form-control" name="title"
                    onChange={titleHandler} placeholder="New Book Title"/>

                    {/* front-end errors */}
                            {formErrors.title && (
                                <p className="errorText">{formErrors.title}</p>
                            )}

                    {/* back-end errors */}
                    {errors.title ? <p className="errorText">{errors.title.message}</p> : null}
                <br />
                    <input type="text" value={author} class="form-control" name="author"
                        onChange={authorHandler} placeholder="Book Author" />

                        {/* front-end errors */}
                        {formErrors.author && (<p className="errorText">{formErrors.author}</p>)}

                        {/* back-end errors */}
                        {errors.author ? <p className="errorText">{errors.author.message}</p> : null}
                <br />
                    <input type="text" value={yearPublished} class="form-control" name="yearPublished"
                        onChange={yearPublishedHandler} placeholder="Year of Publication" />

                        {/* front-end errors */}
                            {formErrors.yearPublished && (<p className="errorText">{formErrors.yearPublished}</p>)}

                        {/* back-end errors */}
                        {errors.yearPublished ? <p className="errorText">{errors.yearPublished.message}</p> : null}
                <br />
                    <input type="number" value={totalPages} class="form-control" name="totalPages"
                        onChange={totalPagesHandler} placeholder="Total Pages" />

                        {/* front-end errors */}
                        {formErrors.totalPages && (<p className="errorText">{formErrors.totalPages}</p>)}

                        {/* back-end errors */}
                        {errors.totalPages ? <p className="errorText">{errors.totalPages.message}</p> : null}
                <br />
                    <div className="checkboxAlign">
                        <div class="checkbox-inline">
                            <input type="checkbox" class="form-check-input" value={isAvailable} id="isAvailable" name="isAvailable"
                                onChange={() => { setIsAvailable(!isAvailable); }} />
                            <label class="checkbox-inline">&nbsp; Check If This Book Is Available</label>
                        </div>
                    </div>
                </div>
                <div className="formButtonBox">
                    <button className="navButton" disabled={!validateForm()}>Add Book</button>
                </div>
            </form>
        </div>
    </>
    );}

export default NewBookForm;