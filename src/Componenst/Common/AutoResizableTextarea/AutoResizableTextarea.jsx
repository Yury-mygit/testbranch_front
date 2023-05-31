import React , { useRef, useEffect, useState }from 'react';

const AutoResizableTextarea = ({
    
    setjsontext,
    jsontext
}) => {
    const textareaRef = useRef(null);
    const [textareaHeight, setTextareaHeight] = useState('auto');
  
    useEffect(() => {
      adjustTextareaHeight();
    }, []);
  
    const adjustTextareaHeight = () => {
      const textarea = textareaRef.current;
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    };
  
    const handleTextareaChange = (e) => {
      setjsontext(e.target.value) 
      adjustTextareaHeight();
    };
  
    return (
        <textarea
            ref={textareaRef}
            style={{ height: textareaHeight }}
            onChange={(e)=>handleTextareaChange(e)}
            value={jsontext}
        />

    );
};

export default AutoResizableTextarea;