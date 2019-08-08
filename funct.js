
  function funct(){
    const array = [];
      for (let i = 0; i <= 7; i ++) {
        array[i] = [];
        for (let j = 0; j <=i; j++){
        
          array[i][j] = "*";
            
    }
    }
    console.log(array);

  };

  funct();



  let j;
  let i;
  for (let i = 0; i <= 7; i ++) {
    
      for (let j = 0; j <=i; j++){
        document.write("*&nbsp;&nbsp;&nbsp");
      }
      document.write("<br>");
  };

  

  
