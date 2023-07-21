import React , { useRef, useEffect, useState }from 'react';
import cl from './AutoResizableTextarea.module.scss'

const AutoResizableTextarea = ({ 
  set =()=>{},
  jsontext='', 
  addClass='', 
  answer = 'array',
}) => {
    const textareaRef = useRef(null);
    const [textareaHeight, setTextareaHeight] = useState('auto');
    const [textForParse, setTextForParse]           = useState(jsontext)
    useEffect(() => {
      adjustTextareaHeight();
    }, []);


    console.log(jsontext)

    useEffect(()=>{
    
      if (answer == 'array')  set( textForParse.parseTextToData().makeFlatArray1().makeSortArray1() )
      if (answer == 'string') set( textForParse )
  
    },[textForParse])
  
    const adjustTextareaHeight = () => {
      const textarea = textareaRef.current;
      textarea.style.height = 'auto';
      // textarea.style.height = '100%';
      let a = textarea.scrollHeight
      console.log(a)

      textarea.style.height = textarea.scrollHeight> 400? `400px` : `${textarea.scrollHeight}px`;
    };
  
    const handleTextareaChange = (e) => {
      // setjsontext(e.target.value) 
      setTextForParse(e.target.value)
      adjustTextareaHeight();
    };
  
    return (
      <div className={cl.wrapper}>
          <textarea
          className={[cl.textarea, addClass].join(' ')}
          ref={textareaRef}
          style={{ height: textareaHeight }}
          onChange={(e)=>handleTextareaChange(e)}
          value={textForParse}
        />
      </div>
    );
};

export default AutoResizableTextarea;