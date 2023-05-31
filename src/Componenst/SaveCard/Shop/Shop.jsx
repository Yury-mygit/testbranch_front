import React from 'react';
import cl from './Shop.module.scss'
import Item from './Item/Item';

const Shop = ({pay,amount, setAmount}) => {
    return (
        <div className={cl.wrapper}>
            <h2>Демо магазин</h2>
            <div className={cl.gallery}>
                <Item setAmount= {setAmount}/>
                <Item setAmount= {setAmount}/>
                <Item setAmount= {setAmount}/>
                <Item setAmount= {setAmount}/>
                <Item setAmount= {setAmount}/>
                <Item setAmount= {setAmount}/>
            </div>
            
            <div className={cl.actionButtons}>
                <button
                    onClick={()=>pay(amount)}
                > Оплатить {amount} рублей
                </button>
           
                <button
                    onClick={()=>setAmount(0)}
                >
                    Сбросить
                </button>
            </div>
        </div>
    );
};

export default Shop;