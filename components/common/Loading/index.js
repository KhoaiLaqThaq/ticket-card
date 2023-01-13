import React from 'react';

import HashLoader from 'react-spinners'

export default function Loading(props) {
    return <><HashLoader color="#36d7b7" loading={props.loading} /></>
}
