import React, { Fragment } from 'react';

const Button = (props) => {

    return(
        <Fragment>
            <div className = 'button' >
            <button className = 'loadButton'  onClick={props.onClick}>Load More</button>
            </div>
        </Fragment>
    )
}

export default Button;