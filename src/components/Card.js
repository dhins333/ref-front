import React from 'react';

const Card = (props) => {
    return(
        <div className='card' onClick = {props.onClick}>
            <img className='card__img' src={props.logo} alt='card'/>
            <div className='card__name'><h3>{props.name}</h3></div>
        </div>
    )
}

export default Card