import React, {Fragment, } from 'react';
import Books from "./Books";
import Pagination from "./Pagination";

export default function HomeApp() {

    return (
        <Fragment>
            <Books/>
            <Pagination/>
        </Fragment>
    );
}