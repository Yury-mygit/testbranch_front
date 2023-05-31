import React from 'react';
import cl from './Flow.module.scss'

import Block from './Block/Block';
import Rhombus from './Rhombus/Rhombus';

const Flow = ({params}) => {
    return (
        <div className={cl.wrapper}>

          
         <Block text = {params.data.text} 
            arrowOn={0} 
            status={params.data.status}
        />
         <Block text = {"Запрос"} status={params.request.status} />
         <Block text = {"Ответ"} status={params.responce.status} />
         <Rhombus 
            text = {"pg_status=?"} 
            status={params.choiceStatus.status}
         />

         <div className={cl.spliter}>

            <div className={cl.column}>
                <Block 
                text = {"error"} 
                testBefore="error" 
                status={params.error.status}/>
            </div>

            <div className={[cl.column, cl.minw100].join(' ')}>
                <Rhombus 
                    text = {"pg_3ds=?"} 
                    testBefore="ok"
                    status={params.choiceIs3DSRequired.status}
                />
                <div className={cl.spliter}>
                    <div className={cl.column}>
                        <Block 
                            text = {"Выполнен"} 
                            status={params.finalWithout3DS.status}
                        />
                    </div>
                    <div className={cl.column}>
                        <Block text = {"данные"} status={params.dataAfter3DS.status}/>
                        <Block text = {"Запрос"} status={params.requestAfter3DS.status}/>
                        <Block text = {"Ответ"} status={params.responceAfter3DS.status}/>
                        <Rhombus text = {"pg_status=?"} status={params.choicePaymentStatus.status}/>
                        <div className={cl.spliter}>
                            <div className={cl.column}>
                                <Block 
                                    text = {"Ошибка"} 
                                    status={params.paymentFail.status}
                                />
                            </div>
                            <div className={cl.column}>
                                <Block 
                                    text = {"Выполнен"} 
                                    status={params.paymentSuccess.status}
                                />
                            </div>

                        </div>
                    </div >

            
                </div>

            </div>


         </div>
        

        </div>
    );
};

export default Flow;