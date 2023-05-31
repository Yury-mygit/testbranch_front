import React from 'react';
import cl from './Desc.module.scss'
import {widgetData} from '../../data'

const Desk = () => {
    // console.log(widgetData)
    return (
        <div className={cl.description}>
            <h3>{widgetData.description.title}</h3>
            <p className={cl.desk_text}>{widgetData.description.text}</p>

            <div>
                <h3>Преимущества</h3>
                <ul>
                    <li> <div>Легкая и быстрая интеграция</div> </li>
                    <li> <div>Может быть выполнена только на фронт части сайта</div> </li>
                </ul>
               
               
                
            </div>


            <div className={cl.compare}>
                <div>
                    <h3>Возможные способы проведения оплаты</h3>
                    <div className={cl.paytech}> <div className={cl.opt}>Банковские карты </div>   <div>Да</div>    </div>
                    <div className={cl.paytech}> <div className={cl.opt}>Электронный кошелек </div>   <div>Да</div>    </div>
                    <div className={cl.paytech}> <div className={cl.opt}>Баланс мобильного телефона </div>   <div>Да</div>    </div>
                    <div className={cl.paytech}> <div className={cl.opt}>Офлайн точки приема </div>   <div>Да</div>    </div>
                    <div className={cl.paytech}> <div className={cl.opt}>Система быстрых платежей </div>   <div>Да</div>    </div>
                    <div className={cl.paytech}> <div className={cl.opt}>Оплата в Телеграмм</div>   <div>Да</div>    </div>

                </div>
                <div>
                    <h3>Возможные технологии оплаты</h3>
                    <div className={cl.paytech}> <div className={cl.opt}>Прямая оплата </div>   <div>Да</div>    </div>
                    <div className={cl.paytech}> <div className={cl.opt}>Передача налоговой онформации </div>   <div>Да</div>    </div>
                    <div className={cl.paytech}> <div className={cl.opt}>Создание реккурентного платежа </div>   <div>нет</div>    </div>
                    <div className={cl.paytech}> <div className={cl.opt}>Сохранение карты </div>   <div>нет</div>    </div>

                </div>
              </div>

            
            <h3>Шаги проведения платежи</h3>
            <div className={cl.desk_workWay}>
                
                <div className={cl.step}>
                    <h4>Формирование заказа.</h4>
                    <div>Заказ формируется на стороне магазина</div>
                </div>
                <div className={cl.step}>
                    <h4>Формирование данных и вызов виджета</h4>
                    <div>Перед вызовом виджета необходимо сформировать структуру данных, которая будет передана в виджет. Обратите внимание на вложенность данных. При нарушении вложенности данные платежа будут переданы некорректно, что может привести в отказу в проведении платежа. </div>
                </div>
                <div className={cl.step}>
                    <h4>Ввод карточных данных</h4>
                    <div>Плательшик вводит карточные данные </div>
                </div>
                <div className={cl.step}>
                    <h4>Ожидание прохождения оплаты</h4>
                    <div>Необходимо дождаться прохождения платежа</div>
                </div>
                <div className={cl.step}>
                    <h4>Получение результата оплаты</h4>
                    <div>Заказ формируется на стороне магазина</div>
                </div>
              
            </div>

            <div className={cl.errors}>
                <h3>Частые ошибки</h3>
                <div>
                        После нажатия кнопки оплатить в фрейме не происходит отправка данных карты.
                        Проверьте вложеноость параметров, возможно не корректно указал телефон или почта клиента
                </div>
            </div>

            <div className={cl.errors}>
                <h3>Задачи интегратора</h3>

                <ol>
                    <li>
                       <div>
                        Сгенерировать ключ для виджета в настройках магазина арм
                       </div>
                    </li>
                    <li>
                        <div>
                         Внимание! Виджет будет работать только на тех доменах, которые прописаны в арм, поэтому нужно:
                        <ul>
                            <li>Запросить домены(адреса сайтов) на которых мерчант планирует использовать виджет</li>
                            <li>Сверить список доменов в арм(настройки магазина) и предоставленного мерчантом</li>
                        </ul> 
                         
                        
                </div>
                    </li>
                </ol>


               
                
            </div>

        </div>
    );
};

export default Desk;