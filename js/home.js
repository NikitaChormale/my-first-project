function darkMode(){
    const imgDark = document.getElementById(`img-dark`);
    imgDark.classList.add(`active`);
  
    const imgLight= document.getElementById(`img-light`);
    imgLight.classList.remove(`active`);
  
    const bodyElement=document.getElementById("body1");
    bodyElement.className=`theme-dark`;
  }
  function lightMode(){
    const imgDark= document.getElementById(`img-dark`);
    imgDark.classList.remove(`active`);
  
    const imgLight=  document.getElementById(`img-light`);
    imgLight.classList.add(`active`);
  
    const bodyElement=document.getElementById(`body1`);
    bodyElement.className=`theme-light`;
  
  }
    // increament - decriment
  