//array Pages

  const allContainers = document.querySelectorAll('.Pages');
  const nodeArray = Array.from(allContainers); 
//array Spans
  const allSpan = document.querySelectorAll('.containerConteudo > a > span');
  const spanArray = Array.from(allSpan)
  console.log(allSpan)
//Array Li
  const navMenuLi = document.querySelectorAll('.NumbersOl > li');
  const liArray = Array.from(navMenuLi)

  for(let i = 0; i < nodeArray.length; i++){

    nodeArray[i].addEventListener('wheel', (event) => {
        var y = event.deltaY;

        if( y > 0 && i < 4 ){     
          //adiciona e remove as classes posteriores
          liArray[i+1].classList.add('activeSlide')       
          nodeArray[i+1].classList.add('visibilityPage');
          nodeArray[i+1].classList.remove('animationPageUp');

          spanArray[i+1].classList.add('animationSpan');         
          spanArray[i+1].classList.remove('spanPageUp');  

          //adiciona e remove as classes atuais
          liArray[i].classList.remove('activeSlide')
          nodeArray[i].classList.remove('visibilityPage');
          nodeArray[i].classList.add('animationPageUp');

          spanArray[i].classList.remove('animationSpan');  
          spanArray[i].classList.add('spanPageUp');  

          //remove as classes anteriores
          nodeArray[i-1].classList.remove('animationPageUp');  
          spanArray[i-1].classList.remove('spanPageUp');   
        }
        else if (y < 0 && i <= 4){
          //adiciona e remove as classes anteriores
          liArray[i-1].classList.add('activeSlide')
          nodeArray[i-1].classList.add('visibilityPage');
          nodeArray[i-1].classList.remove('animationPageUp');
          spanArray[i-1].classList.add('animationSpan');
          spanArray[i-1].classList.remove('spanPageUp');

          //adiciona e remove as classes atuais
          nodeArray[i].classList.remove('visibilityPage');
          nodeArray[i].classList.add('animationPageUp');
          liArray[i].classList.remove('activeSlide');
          spanArray[i].classList.remove('animationSpan');
          spanArray[i].classList.add('spanPageUp');

          //remove as classes posteriores
          nodeArray[i+1].classList.remove('animationPageUp');  
          spanArray[i+1].classList.remove('spanPageUp');      
        }
    });
    //evento de Click no nav menu
    liArray[i].addEventListener('click', (event) => {

      //nodeArray forEach: para adicionar o animationPageUp em todas as paginas, em seguida removendo da pagina selecionada e adicionando o visibilityPage na pagina selecionada
      nodeArray.forEach((item, index) => {
        item.classList.add("animationPageUp");
        item.classList.remove("visibilityPage");
      });
      nodeArray[i].classList.remove('animationPageUp');
      nodeArray[i].classList.add('visibilityPage');
      // removendo o activeSlide de toda as li e adicionando na que foi clicada.
      liArray.forEach((item, index) => {
        item.classList.remove('activeSlide')
      });
      liArray[i].classList.add('activeSlide');

      //Mesma lógica do nodeArray
      spanArray.forEach((item, index) => {
        item.classList.add('spanPageUp');
        item.classList.remove('animationSpan');
      })
      spanArray[i].classList.remove('spanPageUp');
      spanArray[i].classList.add('animationSpan');
      // setTimeout(() => {
      //   spanArray[i].classList.add('animationSpan');  
      // },100); 
    });

    var touchY;
    nodeArray[i].addEventListener('touchstart', (event) => {
      event.preventDefault();
      var y = event.changedTouches[0];
      touchY = y.pageY;

  }, false);
  nodeArray[i].addEventListener('touchend', (event) => {
    event.preventDefault();
    var y = event.changedTouches[0];
    directionY = y.pageY - touchY;
    
    if( directionY < 0 && i < 4 ){     
      //adiciona e remove as classes posteriores
      liArray[i+1].classList.add('activeSlide')       
      nodeArray[i+1].classList.add('visibilityPage');
      nodeArray[i+1].classList.remove('animationPageUp');

      spanArray[i+1].classList.add('animationSpan');         
      spanArray[i+1].classList.remove('spanPageUp');  

      //adiciona e remove as classes atuais
      liArray[i].classList.remove('activeSlide')
      nodeArray[i].classList.remove('visibilityPage');
      nodeArray[i].classList.add('animationPageUp');

      spanArray[i].classList.remove('animationSpan');  
      spanArray[i].classList.add('spanPageUp');  

      //remove as classes anteriores
      nodeArray[i-1].classList.remove('animationPageUp');  
      spanArray[i-1].classList.remove('spanPageUp');   
    }
    else if (directionY >  0 && i <= 4){
      //adiciona e remove as classes anteriores
      liArray[i-1].classList.add('activeSlide')
      nodeArray[i-1].classList.add('visibilityPage');
      nodeArray[i-1].classList.remove('animationPageUp');
      spanArray[i-1].classList.add('animationSpan');
      spanArray[i-1].classList.remove('spanPageUp');

      //adiciona e remove as classes atuais
      nodeArray[i].classList.remove('visibilityPage');
      nodeArray[i].classList.add('animationPageUp');
      liArray[i].classList.remove('activeSlide');
      spanArray[i].classList.remove('animationSpan');
      spanArray[i].classList.add('spanPageUp');

      //remove as classes posteriores
      nodeArray[i+1].classList.remove('animationPageUp');  
      spanArray[i+1].classList.remove('spanPageUp');      
    }
}, false);
  }