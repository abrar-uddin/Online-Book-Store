import React, { Fragment } from 'react';
import Forms from './Forms';
import Profiles from './Profiles';
import Cards from './Cards'
import CardForms from './CardForms'
import Details from './Details'
import DetailForms from './DetailForms'

export default function Dashboard() {
    return (
        <Fragment>
            <Forms />
            <Profiles />
            <CardForms />
            <Cards />
            <DetailForms />
            <Details />
        </Fragment>
    )
}
