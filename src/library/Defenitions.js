Object.defineProperty(String.prototype, 'parseTextToData', {
    value: function () {

       
        // Попытка распарсить как JSON
        data = parseJSON(this)        
        if (data.status == 'ok') {
          console.log('parsed as JSON successfully')
          return data.data
        }
        else {
          console.log('Not a JSON')
        }

        // Не удалось распарсить как JSON, проверяем на массив PHP
        data = parsePhpArray(this);
        if (data.status == 'ok') {
          console.log('parsed as PHP successfully')
          return data.data
        }
        else {
          console.log('Not a PHP array')
        }

        return {}



        function parseJSON (text) {
          let ans = Object
          .values(text)
          .filter(item=>{
              // console.log(item ,/[a-zA-Z0-9Аа-яА-Я{}[\]=\-_\":;,\\/]/.test(item))
             return  /[a-zA-Z0-9Аа-яА-Я{<>\'}[\]=\-_\":;,\\/]/.test(item)
          })
          .join('')
          .replace(/\\"/g,'"')
          try {
              const jsonData = JSON.parse(ans);
              return { data: jsonData, type: 'json', status: 'ok' };
            } catch (error) {
              // console.log(error)
              return { data: {}, type: '', status: 'error' }
            }
        }

        function parsePhpArray(text) {
  
            // Убираем отступы и символы ] или )
            // const cleanLine = (line) => line.trim().replace(/[\[()\]];,/g, "");
            const cleanLine = (line) => line.trim().replace(/[\[()\],';]/g, "");
    
            const lines = text.trim().split("\n"); 
  
            // console.log(lines)
  
            let filteredArray = lines
            .filter(item=> {
              // console.log(  cleanLine(item))
              return cleanLine(item) !== '' ? true : false
            } )
            .map(item=>cleanLine(item))
            .filter(item=>item.split('=>').length !== 2 ? true : false )
            .length
            
            // console.log(filteredArray)
            if (filteredArray!==0) return 0
            
            let phpArrayData = {};
  
  
           
  
            for (let i = 0; i < lines.length; i++) {
  
                
                const line = cleanLine(lines[i]);
                
                if (line === "") continue
        
                const keyValue = line.split("=>");
                if (keyValue.length !== 2) continue
        
                const key = cleanLine(keyValue[0]);
                let value = cleanLine(keyValue[1]);
        
                phpArrayData[key] = value
            }  
  
            console.log(phpArrayData)
            return {data: phpArrayData, type: 'php', status:'ok'}
        }

    },
    enumerable: false,
    writable: true,
    configurable: true
  });

Object.defineProperty(Object.prototype, 'makeFlatArray1', {
    value: function() {
        // let temp
        console.log('До',this, typeof this)

        if (typeof this !== 'object') return this
    
        if (this && this.hasOwnProperty('sig')) delete this.sig
        if (this && this.hasOwnProperty('pg_sig')) delete this.pg_sig

        // console.log('После',this)
        
        let culc = (obj,array=[], parent_name='') => {
            // console.log(obj)
            let index = 0
            for (let key in obj){
                index++
                let str = index.toString()
                if (typeof  obj[key] == 'object' &&  obj[key] !=null) culc(obj[key],array,parent_name+key + str.padStart(3, '0'))
                else{
                    let a = {}           
                    a.field=parent_name + key + str.padStart(3, '0')
                    a.data=obj[key]
                    array.push(a)
                }          
               
                  
            }
            return array
        }
        
        return  culc(this.data)
    },
    enumerable: false,
    writable: true,
    configurable: true
  });

Object.defineProperty(Object.prototype, 'makeSortArray1', {
    value: function() {
        // console.log(this,typeof this)
        if (!Array.isArray(this)) return this
        return  this.sort((a, b) => a.field > b.field ? 1 : -1)
    },
    enumerable: false,
    writable: true,
    configurable: true
  });

Object.defineProperty(Object.prototype, 'makeString1', {
    value: function(url, secret) {

        // console.log(this,typeof this)

        if (!Array.isArray(this)) return this

        let result = url.split('/').at(-1) + ';'.concat(this.map(i=> i.data).join(';'),';',secret)
       
        // console.log(result)

        return result
    },
    enumerable: false,
    writable: true,
    configurable: true
  });

Object.defineProperty(String.prototype, 'makeSig1', {
    value: function() {
        // let temp
        if (this == 'parse error') return this
        
        return  md5(this)
    },
    enumerable: false,
    writable: true,
    configurable: true
  });

Object.defineProperty(String.prototype, 'compare1', {
    value: function compareStrings(str) {
        // Проверяем, являются ли строки идентичными
        if (this === str) {
          return -1;
        }
      
        // Определяем максимальную длину для итерации
        const maxLength = Math.min(this.length, str.length);
      
        // Итерируем по символам обеих строк
        for (let i = 0; i < maxLength; i++) {
          // Если символы отличаются, возвращаем индекс первого отличного символа
          if (this[i] !== str[i]) {
            return i;
          }
        }
    },
    enumerable: false,
    writable: true,
    configurable: true
  });