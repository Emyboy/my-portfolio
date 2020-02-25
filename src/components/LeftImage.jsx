import React from 'react';
import image from '../images/emy.jpg';

export default () => {
    return(
        <div className="background-bg">
            <div className="background-filter">
                <div className="background-img" style={{backgroundImage: `url(${image})`}}>

                </div>
            </div>
        </div>
    )
}

