import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Nav() {
    const location = useLocation()
    const url = window.location.pathname
    const [navText, setNavText]= useState()
    console.log(window.location.pathname)


    const changeHeader = () => {
        if (location.pathname == '/') {
            return "SNOOTY LITERARY SOCIETY"
        }
        if (location.pathname == '/new/book') {
            return "ALRIGHT, ADD A BOOK ALREADY!"
        }
        if (location.state == 'update') {
            const navTitle = location.pathname.slice(location.pathname.lastIndexOf('/') + 1, location.pathname.length)
            const newTitle = navTitle.replaceAll("%20", " ");
            return `UPDATE: "${newTitle}"`
        }
        if (location.state == 'details') {
            const navTitle = location.pathname.slice(location.pathname.lastIndexOf('/') + 1, location.pathname.length)
            const newTitle = navTitle.replaceAll("%20", " ")
            return `Details for "${newTitle}"`;
        }
    }

    return (
        <header>
            <nav>
                <div className="navContainer">
                    <div className="navVariableHeader">
                        <p className="pageTitle">{changeHeader()}</p>
                    </div>
                    <div className="navButtonBox">
                        <Link to={"/"}>
                            <button className="navButton">Book Catalog</button>
                        </Link>
                        <Link to={"/new/book"}>
                            <button className="navButton">Add A Book</button>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
export default Nav