function allLetter(inputtxt)
      { 
      let letters = /^[A-Za-z]+$/;
      if(inputtxt.match(letters))
      {
      return true;
      }
      else
      {
      /* alert('Atencion Solo letras'); */
      return false;
      }
      }