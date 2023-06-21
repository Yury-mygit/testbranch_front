import React from 'react';
import cl from './ScreenResponse.module.scss'

const ScreenResponse = ({xml}) => {
    return (
        <div className={cl.response}>
            <h4 className={cl.title}>Текст ответа</h4>  
            {xml}
        </div>
    );
};

export default ScreenResponse;

