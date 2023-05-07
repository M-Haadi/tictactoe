const row=document.querySelector('.row');
const icon=document.querySelectorAll('.icon');
const winner= document.querySelector('.winner');
const reset= document.querySelector('.reset');
let ting =new Audio("../mp3s/ting.mp3");
let gameovermusic= new Audio("../mp3s/gameover.mp3");
let gamebg=new Audio("../mp3s/Snake Music.mp3");
let turn = document.querySelector('.turn');
turn.innerHTML=`TURN OF: ✔`;
let isgameover=false;
let checker=0;
let boxcount=0;
let arr=[
    
    ["0", "1" ,"2" ],
    ["3", "4" ,"5" ],
    ["6", "7" ,"8" ],

    ["0", "3" ,"6" ],
    ["1", "4" ,"7" ],
    ["2", "5" ,"8" ],

    ["0", "4" ,"8" ],
    ["2", "4" ,"6" ],
    
];



let counter=0;

const checkwin=()=>{

    arr.forEach(elem => {
    
let paras = document.querySelectorAll('.icon');

     
if(paras[elem[0]].innerHTML=== paras[elem[1]].innerHTML   && paras[elem[2]].innerHTML=== paras[elem[1]].innerHTML && paras[elem[0]].innerHTML!== ''  )
{
   
   winner.innerHTML =`${ paras[elem[0]].innerHTML} WON!`
   isgameover=true;
 

}



    });
    

}







reset.addEventListener('click',()=>{

    icon.forEach(elem => {
        elem.innerHTML="";
    });
   
    turn.innerHTML=`TURN OF: ✔`;
    winner.innerHTML=turn.innerHTML;
    isgameover=false;
    checker=0;
    boxcount=0;
  
})





icon.forEach(ele=>{

ele.addEventListener('click',()=>{

if(checker%2==0){
    if(ele.innerHTML!==""){
        ele.innerHTML="❌";
        turn.innerHTML=`TURN OF: ✔`;
    }
    else{
ele.innerHTML="✔";
turn.innerHTML=`TURN OF: ❌`
checker++;
boxcount++;
}
ting.play();
winner.innerHTML=turn.innerHTML;

checkwin();
if(isgameover==true){
    gameovermusic.play();
   
}
else if(isgameover!==true && boxcount==9){
    winner.innerHTML="Game Draw! Reset to play again!";
}
}

else if(checker%2!==0){

    if(ele.innerHTML!==""){
        ele.innerHTML="✔";
        turn.innerHTML=`TURN OF: ❌`
        
    }
    else{
ele.innerHTML="❌";
turn.innerHTML=`TURN OF: ✔`;
checker++;
boxcount++;
}


    
    
    ting.play();
    winner.innerHTML=turn.innerHTML;
    checkwin();
    if(isgameover==true){
        gameovermusic.play();
      //  gamebg.pause();
    }
    }

})




})


























     
        

        // icon.forEach((iconEle)=>{

        //     iconEle.addEventListener('click',()=>{
        
        //         if(checker%2==0){
        //         iconEle.innerHTML="O";
                
        //         arr[i][j]=iconEle.innerHTML;
        //         checker++;
        //         console.log(arr);
        //         }
        //         else if(checker%2!==0){
        //             iconEle.innerHTML="X";
        //             arr[i][j]=iconEle.innerHTML;
        //             checker++;
        //             console.log(arr);
        //             }
                
        //     })
        
        // })
       
    
    
