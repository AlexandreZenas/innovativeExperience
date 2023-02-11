//array Pages
  const allContainers = document.querySelectorAll('.Pages');
  const nodeArray = Array.from(allContainers); 
//array Spans
  const allSpan = document.querySelectorAll('.containerConteudo > span');
  const spanArray = Array.from(allSpan)
//Array Li
  const navMenuLi = document.querySelectorAll('.NumbersOl > li');
  const liArray = Array.from(navMenuLi)

  for(let i = 0; i < nodeArray.length; i++){

    nodeArray[i].addEventListener('wheel', (event) => {
        var y = event.deltaY;

        if( y > 0 && i < 4 ){     
          //adiciona e remove as classes posteriores
          liArray[i+1].classList.add('activeSlide')
          spanArray[i+1].classList.remove('animationSpan');         
          nodeArray[i+1].classList.add('visibilityPage');
          nodeArray[i+1].classList.remove('animationPageUp');

          /*esse timeOut serve para que o 'animateSpan' seja removido e adicionado novamente, para a animation
          funcionar*/
          setTimeout(() => {
            spanArray[i+1].classList.add('animationSpan');  
          },100); 

          //adiciona e remove as classes atuais
          liArray[i].classList.remove('activeSlide')
          nodeArray[i].classList.remove('visibilityPage');
          nodeArray[i].classList.add('animationPageUp');

          //remove as classes anteriores
          nodeArray[i-1].classList.remove('animationPageUp');   
        }
        else if (y < 0 && i <= 4){
          //adiciona e remove as classes anteriores
          liArray[i-1].classList.add('activeSlide')
          spanArray[i-1].classList.remove('animationSpan');
          nodeArray[i-1].classList.add('visibilityPage');
          nodeArray[i-1].classList.remove('animationPageUp');

          //timeOut para a animation do Span
          setTimeout(() => {
            spanArray[i-1].classList.add('animationSpan');
          },100); 

          //adiciona e remove as classes atuais
          nodeArray[i].classList.remove('visibilityPage');
          nodeArray[i].classList.add('animationPageUp');
          liArray[i].classList.remove('activeSlide');

          //remove as classes posteriores
          nodeArray[i+1].classList.remove('animationPageUp');        
        }
    });
    liArray[i].addEventListener('click', (event) => {
      console.log(liArray[i])
    });
  }