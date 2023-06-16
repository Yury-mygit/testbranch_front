import React from 'react';
import cl from './Ivent.module.scss'

const Ivent = ({text, status='notreached',testBefore=''}) => {
    return (
        <div className={cl.wrapper}>
            {testBefore!='' ? <div className = {cl.text}> {testBefore} </div> :'' }  
            <div className={[cl.content, cl[status]].join(' ')}>
                {text}
             </div>
        </div>
        
    );
};

export default Ivent;