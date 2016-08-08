//sets element to the variable $pic
var pic = $("#pic"); 
var ground=$('#ground');
var picBottom = pic.top+pic.length;
var groundTop = ground.top;
pic.click(function(){setInterval(function(){interval()
   //Your code goes here
   function interval(){
        var num1= console.log("1second");
        var num2 = pic.top = pic.top + 10;
        var num3 = $("#pic").css("top", pic.top);
   }
    });
    
    if(groundTop===picBottom){
        clearInterval();
    }
    
});
       
       
   