import React from 'react';
import cl from './DemoShop.module.scss'
import Item from '../Item/Item';

const DemoShop = ({setAmount, payStart, amount}) => {
    return (
        <div className={cl.wrapper}>
            <h4 className={cl.title}>Демо магазин</h4>
            <div className={cl.gallery}>
                <Item setAmount= {setAmount}/>
                <Item setAmount= {setAmount}/>
                <Item setAmount= {setAmount}/>
                <Item setAmount= {setAmount}/>
            </div>
            <button onClick={()=>payStart()}>Оплатить  {amount}  </button>
        </div>
    );
};

export default DemoShop;