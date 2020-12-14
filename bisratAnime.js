//Bisrat Kebede , April 28,2019
//BisratAnime JS
//Refresh the web page to see the animation again and again
anime({
    
    targets: 'div.box.green',//my target 
    translateX:[ // thhis will make the animation moves on the X-axis
        {value:-200, duration : 3000},//goes to the left within 3000ms
        {value:0, duration : 1000}//return to the orginal place
       
        
        ],
      rotate:{
          value:'1turn',//makes the box rotate one full 360degree
          easing:'easeInOutSine'//makes the the box movement smooth
          
      }
    
    
});
anime({
    
    targets: 'div.box.yellow',
    translateY:[
        {value:100, duration : 3000,delay: 1500},//waits until the first box goes to the left then go down
        {value:0, duration : 1000}
        
        ],
     rotate:{
          value:'1turn',
          easing:'easeInOutSine',
          delay: 1500//waits the first box go back to its original place
          
      }
    
    
});
anime({
    
    targets: 'div.box.red',
    translateX:[
        {value:200, duration : 3000,delay: 2000},//waits until the second box goes down then go right
        {value:0, duration : 1000}
        
        ],
         rotate:{
          value:'1turn',
          easing:'easeInOutSine',
          delay: 2000 //waits the second box go back to its original place
          
      }
    
    
    
});
