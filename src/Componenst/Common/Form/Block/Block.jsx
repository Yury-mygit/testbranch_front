import React from 'react';
import cl from './Block.module.scss'

const Block = ({item,status, setStatus}) => {
    return (
        <div className={cl.wrapper} key = {item.id}>
            <div>
                <input 
                    type="checkbox" 
                    checked={item.checked} 
                    disabled={item.isDisabled}
                    onChange={(e)=>{
                        let a = status.filter(i=>i.id!=item.id)
                        let b = structuredClone(item)
                        b.checked=!b.checked
                        let c = [...a,b]
                        c.sort((a,b)=>a.id>b.id ? 1 : -1)
                        
                        setStatus(c)
                    }}
                />
                <label htmlFor={item['inputID']}> {item.labelText} </label>
            </div>
            
            <input 
                id = {item['inputID']}
                type="text" 
                placeholder={item['labelText']} 
                value={item.data}
                disabled={!item.checked}
                onChange={(e)=>{
                    let a = status.indexOf(item)
                    let c = structuredClone(status)
                    c[a].data=e.target.value
                    setStatus(c)
                }}
            />
        </div>
    );
};

export default Block;