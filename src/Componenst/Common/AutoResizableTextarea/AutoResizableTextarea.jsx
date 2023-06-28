import React , { useRef, useEffect, useState }from 'react';
import cl from './AutoResizableTextarea.module.scss'
// import {} from './../../../library/Defenitions'


const AutoResizableTextarea = ({ setjsontext, jsontext='', addClass='' }) => {
    const textareaRef = useRef(null);
    const [textareaHeight, setTextareaHeight] = useState('auto');
  
    useEffect(() => {
      adjustTextareaHeight();
    }, []);

    const parser = (text) => {
      // console.log()
      console.log( text.parseTextToData().makeFlatArray1() )
      // text.parseTextToData() 
      // .makeFlatArray1()
    }
  
    const adjustTextareaHeight = () => {
      const textarea = textareaRef.current;
      textarea.style.height = 'auto';

      textarea.style.height = textarea.scrollHeight> 400? `400px` : `${textarea.scrollHeight}px`;
    };
  
    const handleTextareaChange = (e) => {
      setjsontext(e.target.value) 
      parser(e.target.value);
      adjustTextareaHeight();
    };
  
    return (
    <textarea
      className={[cl.wrapper, addClass].join(' ')}
      ref={textareaRef}
      style={{ height: textareaHeight }}
      onChange={(e)=>handleTextareaChange(e)}
      value={jsontext}
    />

    );
};

export default AutoResizableTextarea;