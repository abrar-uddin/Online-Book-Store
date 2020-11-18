import React, {Component, useState, useEffect} from 'react';
import axios from 'axios';
import './Pagination.css';
import ReactPaginate from 'react-paginate';


function Pagination() {

    const pages = 10;

    const numberOfPages = []

    for(let i = 1; i <= pages; i++) {
        numberOfPages.push(i)
    }

    const[currentButton, setCurrentButton] = useState(1)
    const [arrOfCurrButtons, setArrOfCurrButtons] = useState([])

    useEffect(() => {
        let tempNumberOfPages = [...arrOfCurrButtons]
        if (currentButton >= 1 && currentButton <= 3) {
            tempNumberOfPages = [1, 2, 3, 4, '...', numberOfPages.length]
        } else if (currentButton === 4) {
            const sliced = numberOfPages.slice(0,5)
            tempNumberOfPages = [...sliced, '...', numberOfPages.length]
        } else if (currentButton > 4 && currentButton < numberOfPages.length - 2) {
            const sliced1 = numberOfPages.slice(currentButton - 2, currentButton)
            const sliced2 = numberOfPages.slice(currentButton, currentButton + 1)
            tempNumberOfPages = ([1, '...', ...sliced1, ...sliced2, '...', numberOfPages.length])
        } else if (currentButton > numberOfPages.length - 3) {
            const sliced = numberOfPages.slice(numberOfPages.length - 4)
            tempNumberOfPages = ([1, '...', ...sliced])
        }
        setArrOfCurrButtons(tempNumberOfPages)
    }, [currentButton])
        return (
            <div className="pagination">
                <li className="waves-effect"><a
                onClick={() => setCurrentButton((prev) => prev === 1 ? prev : prev - 1)}
                ><i className="material-icons">chevron_left</i></a></li>
                {arrOfCurrButtons.map((page, index) => {
                    return (
                        <li key = {index} class="waves-effect teal" className={currentButton === page ? 'active': ''}><a onClick={() => setCurrentButton(page)} >{page}</a></li>
                    )
                })}
                <li className="waves-effect"><a
                onClick={() => setCurrentButton((prev) => prev === numberOfPages.length ? prev : prev + 1)}
                ><i className="material-icons">chevron_right</i></a></li>
            </div>
        );
}


export default Pagination;