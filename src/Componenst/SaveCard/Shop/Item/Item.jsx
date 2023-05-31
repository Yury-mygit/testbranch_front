import React from 'react';
import cl from './Item.module.scss'

const Item = ({setAmount}) => {
    return (
        <div className={cl.item}>
            <h4>Товар 1</h4>

            <p> Описание товара 1  </p>

            <p>Цена 5 рублей</p>
            <button
                onClick={()=>setAmount(prevCount=>prevCount+5)}
            >
                В Корзину
            </button>
            
        </div>
    );
};

export default Item;