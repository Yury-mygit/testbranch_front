import React from 'react';
import cl from './Rhombus.module.scss'

import arrow from '../Block/arrow.png'

const Rhombus = ({
    text="no data",
    arrowOn = 1, 
    testBefore='',
    status='notreached'
}) => {

  
    const currentStyle = {
        'notreached': { backgroundColor: 'gray', },
        'completed': { backgroundColor: 'blue', },
        'current': { backgroundColor: 'green', },
    }
    

    
    return (
        <div className={cl.wrapper}>

            {testBefore!='' ? <div> {testBefore} </div> :'' }
            {arrowOn ? <img  src={arrow} /> :'' }
            
            {/* // Не работает задание стилей в таком виде */}
            <div className={[cl.RhombusOut, cl[status]].join(' ')}
            // А в таком сработало
            style={currentStyle[status]}
            >
                <div className={cl.Rhombus}>
                    <div>{text} </div>               
                </div>
            </div>
        </div>
    );
};

export default Rhombus;