// define elements
let title=document.querySelector(".title")
let turn ="X";
let item=[];

// winner
function end(num1,num2,num3){
    title.innerHTML=item[num1]+" winner";
    
    let item1= document.getElementById("items"+num1);
   
    item1.classList.add("scaling");

    let item2= document.getElementById("items"+num2);

   
    item2.classList.add("scaling");


    let item3= document.getElementById("items"+num3);
  
   
    item3.classList.add("scaling");


    
    setInterval(function(){
        title.innerHTML+="💚"
    },1000)
    setTimeout(function(){
        location.reload()
    },4000)
}


//the  equal of  the content means win
function winner(){
    for(let i=1;i<10;i++){
        item[i]=document.getElementById("items"+i).innerHTML
    }
    if(item[1]==item[2]&&item[2]==item[3]&&item[1]!=""){
        end(1,2,3);
    }
    
    else if(item[4]==item[5]&&item[5]==item[6]&&item[4]!=""){
        end(4,5,6)
    }
    else if(item[7]==item[8]&&item[8]==item[9]&&item[7]!=""){
        end(7,8,9)
       
    }


    else if(item[1]==item[4]&&item[4]==item[7]&&item[1]!=""){
        end(1,4,7)
       
    }
    else if(item[2]==item[5]&&item[5]==item[8]&&item[8]!=""){
        end(2,5,8)
       
    }
    else if(item[3]==item[6]&&item[6]==item[9]&&item[3]!=""){
        end(3,6,9)
       
    }


    else if(item[1]==item[5]&&item[5]==item[9]&&item[1]!=""){
        end(1,5,9)
       
    }
    
    else if(item[3]==item[5]&&item[5]==item[7]&&item[3]!=""){
        end(3,5,7)
       
    }
}


// switching between x and o in the content and the title
function game(id)
{
    let element=document.getElementById(id);
    if(turn==="X" && element.innerHTML==""){
        element.innerHTML="X";
        turn="O";
        title.innerHTML="O"
    }
    else if(turn==="O" && element.innerHTML==""){
        element.innerHTML="O";
        turn="X";
        title.innerHTML="X";
    }
    winner();
    
}
