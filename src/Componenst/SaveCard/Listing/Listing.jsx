import React from 'react';
import cl from './Listing.module.scss'

const Listing = () => {
    return (
        <div className={cl.wrapper}>

            <h3 className={cl.title}>Код</h3>
            <pre> 
                &lt;script&gt;<br />  
                <div>
                {
                "  Листинг сохранения карты со списанием " + "{" +   `\r\n`  + 
                " sdadad"
                }
                </div>

                &lt;script/&gt;<br />
                   
               
            </pre>
        </div>
    );
};

export default Listing;