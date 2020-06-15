import React from 'react';
import FilesList from './FilesList';

const FIlesPage = (props) => {
    return(
        <div>
            <FilesList id={props.match.params.id}/>
        </div>
    )
}

export default FIlesPage