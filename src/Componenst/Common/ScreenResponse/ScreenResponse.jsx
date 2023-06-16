import React from 'react';
import cl from './ScreenResponse.module.scss'
import {doXMLView} from '../../../library/library'

const ScreenResponse = ({xml}) => {
    return (
        <div className={cl.response}>
            <h3>Ответ</h3>
            <h4 className={cl.title}>Параметры</h4>

            {
                doXMLView(xml,cl.line)
                
            }


            
        </div>
    );
};

export default ScreenResponse;

