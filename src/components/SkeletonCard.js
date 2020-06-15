import React from 'react';
import skele from '../img/skeleton.png';

const SkeletonCard = () => {
    return(
        <div className='skeleton'>
            <img src={skele} className='skeleton__img' alt='skeletonimage'></img>
        </div>
    )
}

export default SkeletonCard;