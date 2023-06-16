import React from 'react';
import cl from './Line.module.scss'

const Line = ({children, addClass}) => {
    return (
        <div className={[cl.wrapper, addClass].join(' ')}>
            {children} 
        </div>
    );
};

export default Line;