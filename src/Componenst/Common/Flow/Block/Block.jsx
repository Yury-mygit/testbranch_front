import React from 'react';
import arrow from './arrow.png'

import cl from './Block.module.scss'

const Block = ({
    text , 
    arrowOn = 1,
    testBefore='',
    status='notreached'
}) => {

 

    return (
        <div className={cl.wrapper}>
            {testBefore!='' ? <div> {testBefore} </div> :'' }
            {arrowOn ? <img  src={arrow} /> :'' } 
            <div className={[cl.block, cl[status]].join(' ')}>
                {text}    
            </div>  
        </div>
    );
};

export default Block;