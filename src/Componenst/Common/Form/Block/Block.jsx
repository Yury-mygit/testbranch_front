import React from 'react';
import cl from './Block.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { setChecked, update } from '../../../../features/paymentPageData/paymentPageDataSlice';

const Block = ({item}) => {
    const dispatch = useDispatch();
    return (
        <div className={cl.wrapper} key = {item.id}>
            <div>
                <input 
                    type="checkbox" 
                    checked={item.checked} 
                    disabled={item.isDisabled}
                    onChange={()=>dispatch(setChecked(item))}
                />
                <label htmlFor={item['inputID']}> {item.labelText} </label>
            </div>
            
            <input 
                id = {item['inputID']}
                type="text" 
                placeholder={item['labelText']} 
                value={item.data}
                disabled={!item.checked}
                onChange={e=>dispatch(update({'item':item, "data":e.target.value}))}
            />
        </div>
    );
};

export default Block;