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
                "  (function (p, a, y, b, o, x) " + "{" +   `\r\n`  + 
                "    o = p.createElement(a); "+`\r\n`  + 
                "    x = p.getElementsByTagName(a)[0];"+`\r\n`  + 
                "    o.async = 1;"+`\r\n`  + 
                "    o.src = 'https://static.paybox.money/v1/paybox/pbwidget.js?' + 1 * new Date();"+`\r\n`  + 
                "    x.parentNode.insertBefore(o, x);"+`\r\n`  + 
                "  })(document, 'script');" +`\r\n`+`\r\n`+`\r\n`
                                    
                }
               
                {
                "  function pay(amount) {"+   `\r\n`  +
                "    var data = {"+   `\r\n`  +
                "    token: Ваш токен,"+   `\r\n`  +
                "    payment: {   "+   `\r\n`  +
                "      order: \"1\",     "+   `\r\n`  +                  
                "      amount: \"200\",  "+   `\r\n`  +
                "      currency: \"KZT\",  "+   `\r\n`  +
                "      description: \"Описание заказа\",  "+   `\r\n`  +
                "      expires_at: \"2020-12-12 00:00:00\",  "+   `\r\n`  +
                "      param1: \"string\",  "+   `\r\n`  +
                "      param2: \"string\",  "+   `\r\n`  +
                "      param3: \"string\",  "+   `\r\n`  +
                "      test: 1,  // testing mode"+   `\r\n`  +
                "      options: {"+   `\r\n`  +
                "         callbacks: {"+   `\r\n`  +
                "            result_url: \"https://my-domain.com/result\","+   `\r\n`  +
                "            check_url: \"https://my-domain.com/check\""+   `\r\n`  +
                "         },"+   `\r\n`  +
                "         custom_params: {},"+   `\r\n`  +
                "         user: {"+   `\r\n`  +
                "            email: \"user@test.com\","+   `\r\n`  +
                "            phone: \"77777777777\","+   `\r\n`  +
                "         },"+   `\r\n`  +
                "         receipt_positions: ["+   `\r\n`  +
                "            {"+   `\r\n`  +
                "                count: 2,"+   `\r\n`  +
                "                name: \"Коврик для мыши\","+   `\r\n`  +
                "                tax_type: 3,"+   `\r\n`  +
                "                price: 1000"+   `\r\n`  +
                "            },"+   `\r\n`  +
                "            {"+   `\r\n`  +
                "                count: 2,"+   `\r\n`  +
                "                name: \"Розетка\","+   `\r\n`  +
                "                tax_type: 3,"+   `\r\n`  +
                "                price: 1000"+   `\r\n`  +
                "            } "+   `\r\n`  +
                "         ] "+   `\r\n`  +
                "       } "+   `\r\n`  +
                "    }, "+   `\r\n`  +
                "    successCallback: function (payment) {"+   `\r\n`  +
                "       console.log(payment) // Данные о платеже"+   `\r\n`  +
                "    },"+   `\r\n`  +
                "    errorCallback: function (payment) {"+   `\r\n`  +
                "       console.log(payment) // Данные о платеже"+   `\r\n`  +
                "    }"+   `\r\n`  +
                "  }"+   `\r\n`  + `\r\n`  +
                "  var widget = new Paybox(data);"+   `\r\n`  +
                "  widget.create();"+   `\r\n`  +
                "  }"}

                </div>

                &lt;script/&gt;<br />
                   
               
            </pre>
        </div>
    );
};

export default Listing;