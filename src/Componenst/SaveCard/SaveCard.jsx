import React,{useState, useRef} from 'react';
import Menu from './Menu/Menu'
import Desc from './Desc/Desc'
import Shop from './Shop/Shop'
import Screen from './Screen/Screen'

import Listing from './Listing/Listing'

import cl from './SaveCard.module.scss'

import {useSaveCardMutation} from '../../API/paymentAPI'


const SaveCard = () => {


    const [amount, setAmount] = useState(0)
    const [timer, setTimer] = useState(0)
    const inputEl = useRef(null);

    let timerId
    const [saveCardActoin,{data, isLoading}] = useSaveCardMutation()

    const cardSave = () => {
        console.log('cardSave')
        setTimer(1)
        // saveCardActoin()
        if (timer) {
            setTimer(0)
            setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 0);
        }

    }

    if (timer) {
        timerId = setInterval(() => console.log('tick'), 1000);
    }

    console.log(data)

    return (
        <div className={cl.wrapper}>
            <div className={cl.menu}>
                <Menu />
            </div>
            <div className = {cl.content}>
                <div id='title'> </div>
                <div className={cl.title}>
                    <h2>Сохранение карт</h2>
                </div>
                
                <Desc cardSave={cardSave}/>

                <div id='example'> </div>
                {/* <div className={cl.title}>
                    <h3>Примеры реализации</h3>   
                </div> */}

                {/* <div className={cl.shop}>
                    <Shop pay={pay} amount={amount} setAmount={setAmount} />
                    <Screen inputEl={inputEl}/>
                </div>

                <div id='listing'> </div>
                <Listing inputEl={inputEl}/> */}
            </div>

        </div>
    );
};

export default SaveCard;