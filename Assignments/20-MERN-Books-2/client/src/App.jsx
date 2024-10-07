import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from "./components/Nav"
import DisplayAll from "./components/DisplayAll"
import NewBookForm from "./components/AddBookForm"
import BookDetails from "./components/BookDetails"
import UpdateBookForm from "./components/UpdateBookForm"


function App() {

    return (
        <>
            <Nav/>
            <Routes>
                <Route index element={<DisplayAll/>}/>
                <Route path='/new/book' element={<NewBookForm/>}/>
                <Route path='/details/book/:id/:title' element={<BookDetails />} />
                <Route path='/update/book/:id/:title' element={<UpdateBookForm />} />
            </Routes>
        </>
    )
}

export default App
