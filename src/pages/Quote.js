import { useParams } from 'react-router';

import * as React from 'react';

const QuotePage = (props) =>{
    const { id } = useParams();

    return (
        <div >
            <h1>Quote Details {id}</h1>

            
        </div>
    );
}

export default QuotePage;