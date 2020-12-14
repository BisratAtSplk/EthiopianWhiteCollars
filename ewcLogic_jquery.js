 //Bisrat Kebede, April 28,2019


//Jquery, This specific jquery will help identify if the Professional is actually a human or a robot
//I specifically includes reminder instead of regular math, its because since they are professionals, they should be a ble to identify this easy math problem
//BisratJquery

var input1,input2,actualInput1,actualInput2,prediction,answer,output;//diclaration

//where I will be able to put my actual input, actualInput 1 & 2- are the actual number value that is going to be saved on input 1 & 2
// prediction - this is a value that the professionals is going to guess using direct input method
// answer - the reminder for the actual inputs will be saved here
// output - I used this output so that I can access output id and manipulate the page it here on the conditional statement

$(document).ready(new function(){  //this will manipulate html page,Once it is loaded, it will load the 'new function' on the page
    
    
    
    input1 = document.getElementById("input1"); //this gives privilages to 'var input 1' of js use space/place that is assigned id=input1 on the html page
    input2 = document.getElementById("input2");//same as input1
    prediction = document.getElementById("inputs");//same as input1
    output = document.getElementById("output");//same as input1
    
     input1.innerHTML = Math.floor(Math.random()*20); //math.random-generates random numbers which is in decimals ,
     //I multiplied it to 20 since I want the random number <=20, math.floor-will eliminates any decimals or numbers after the (.)
     input2.innerHTML = Math.floor(Math.random()*20); 
    
    
    $("#hit").click(function(){ //when clicked on submit,the data goes through this function
        seeAnswer();//calling a function called seeAnswer
    });
    
    
   
   
    function seeAnswer(){
       
          
        actualInput1 = parseInt(input1.innerHTML);//chnages into intiger, I have to make sure the random num that is going 
        //to be saved is an integer
         actualInput2 = parseInt(input2.innerHTML);
         answer = (actualInput1 % actualInput2);//calculates reminder
         
         if (parseInt(prediction.value) === answer){//chnage the actual value to integer then
             // checks if the value entered is matching the right answer
             output.innerHTML = "😃 You are a human, Please Sign-Up Here: " + $("#signup_link").css("display", "inline");
             //it will desplay sign-up button here,I will work on the security aspect, credit to Willaim L.
             
         }
        
        else if (parseInt(prediction.value) === answer){
            
            
            
        }
        
        
        
         else {
             
              output.innerHTML = "🙃 You are a robot 😈";
              //it wont desplay sign-up button here
         };
        
    };
    
  
    
 });






