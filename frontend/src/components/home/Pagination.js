import React, {Component, useState, useEffect} from 'react';
import axios from 'axios';
import './Pagination.css';
import ReactPaginate from 'react-paginate';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getBooksPage} from '../../actions/booksorting';

function Pagination() {

        return (
            <li></li>
        );
}

export default Pagination;