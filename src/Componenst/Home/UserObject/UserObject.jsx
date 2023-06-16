import React from 'react';
import AutoResizableTextarea from '../../Common/AutoResizableTextarea/AutoResizableTextarea';

const UserObject = ({ setjsontext = ()=>{}, jsontext='', addClass='' }) => {
    return (
        <AutoResizableTextarea 
                    setjsontext  = {setjsontext}
                    jsontext = {jsontext}
                    addClass={addClass}
        />
    );
};

export default UserObject;