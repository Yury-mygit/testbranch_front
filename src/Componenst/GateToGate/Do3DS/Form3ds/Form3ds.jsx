import React from 'react';
import cl from './Form3ds.module.scss'

const Form3ds = ({params,url,sendUserTo3DS}) => {

    // console.log(params)

    return (
        <div className={cl.wrapper}>
            
            <div className={cl.example}>
            <p>В самом простом варианте форма может выглядеть так</p>           
                <p className={cl.nogap}>{'<form name="SendOrder" method="post" action={{pg_3d_acsurl}}>'} <br /></p>  
                <p className={cl.gap}> {'<input type="text" name="MD" value={md}/>'}             <br /></p>
                <p className={cl.gap}> {'<input type="text" name="PaReq" value={pg_3d_pareq}/>'}<br /></p>
                <p className={cl.gap}> {'<input type="text" name="TermUrl" value={TermUrl}/>'}<br /></p>
                <p className={cl.gap}> {'<input type="submit" value="send"/>'}<br /></p>
                <p className={cl.nogap}> {'</form>'}<br /></p>
            </div>
            <form name="SendOrder" onSubmit={(e)=>{ e.preventDefault(), e.stopPropagation(); sendUserTo3DS()}}>
                <label><div>MD =</div><input type="text" name="MD" value={params.md} onChange={()=>{}}/></label>
                <label><div>PaReq =</div><input type="text" name="PaReq" value={params.pg_3d_pareq} onChange={()=>{}}/></label>
                <label><div>TermUrl =</div><input type="text" name="TermUrl" value={params.TermUrl} onChange={()=>{}}/></label>
                <input className={cl.subbutton} type="submit" value="send"/>
            </form>
            <div>
                После прохождения 3DS на url "TermUrl" придут данные MD и PaRes, которые нужно будет использовать на следующем этапе.
            </div>
        </div>
    );
};

export default Form3ds;