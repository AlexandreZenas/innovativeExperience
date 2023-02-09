  const allContainers = document.querySelectorAll('.Pages');
  const nodeArray = Array.from(allContainers);
 

  for(let i = 0; i < nodeArray.length; i++){

    nodeArray[i].addEventListener('wheel', (event) => {
        var y = event.deltaY;

        if( y > 0 && i < 4 ){     
          
          // nodeArray[i].style.zIndex = 6;
          //adiciona e remove as classes posteriores
            nodeArray[i+1].classList.add('visibilityPage');
            nodeArray[i+1].classList.remove('animationPageUp');

          //adiciona e remove as classes atuais
            nodeArray[i].classList.remove('visibilityPage');
            nodeArray[i].classList.add('animationPageUp');
          //adiciona e remove as classes anteriores
            nodeArray[i-1].classList.remove('animationPageUp');
            // nodeArray[i-1].style.zIndex = 5;
            setTimeout(() => {
              // nodeArray[i].style.zIndex = 5;
              // nodeArray[i].style.zIndex = 5;
            }, 800);
            
        }else if (y < 0 && i <= 4){
          // nodeArray[i].style.zIndex = 6;
        //remove as classes anteriores
          nodeArray[i-1].classList.add('visibilityPage');
          nodeArray[i-1].classList.remove('animationPageUp');
        //remove as classes atuais
          nodeArray[i].classList.remove('visibilityPage');
          nodeArray[i].classList.add('animationPageUp');
        //remove as classes posteriores
          // nodeArray[i-1].style.zIndex = 5;
            setTimeout(() => {

            }, 800);

        }   
    });
  }
