console.log('Week 4- Day 4')

console.log('Tuwaiq Academy   JS')

console.log($('#a'))

$(document).ready(function(){

const cells=$('.cell')
const turnspan=$('#turn')
const winnerSpan=$('#winner');
const winnerPar=$('#parWinner');
const turnPar=$('#parTurn');

let turn="X";
const O="O" ;
const X="X";
const restart=$('#restart');

winnerPar.hide();
restart.hide();



function cellClicked() {
console.log(this);

if($(this).text()===""){
if(turn==="X"){
$(this).text("X");
turnspan.text(O);
checkWinner(X);
turn=O
}else{
    $(this).text("O") ; 
    turnspan.text(X);
    checkWinner(O);
    turn=X 
}

}else
$(this).css("background-color","red")
setTimeout(()=>{
    $(this).css("background-color","white")
   
},250)
}


function checkWinner(player){
    if (
  $(cells[0]).text() === $(cells[1]).text()&&
  $(cells[1]).text() === $(cells[2]).text()&&
  $(cells[0]).text() !== ""

 ){
     playerWin(player)



 }else if  (
    $(cells[0]).text() === $(cells[1]).text()&&
    $(cells[1]).text() === $(cells[2]).text()&&
    $(cells[0]).text() !== ""
  
   ){
       playerWin(player)
    }else if  (
        $(cells[3]).text() === $(cells[4]).text()&&
        $(cells[4]).text() === $(cells[5]).text()&&
        $(cells[3]).text() !== ""
      
       ){
           playerWin(player)
   }else if  (
            $(cells[6]).text() === $(cells[7]).text()&&
            $(cells[7]).text() === $(cells[8]).text()&&
            $(cells[6]).text() !== ""
          
       ){
              playerWin(player)   
      //تشييك طولي         
    }else if  (
      $(cells[0]).text() === $(cells[1]).text()&&
      $(cells[1]).text() === $(cells[2]).text()&&
      $(cells[0]).text() !== ""
              
     ){
      playerWin(player)              



    }else if  (
      $(cells[0]).text() === $(cells[3]).text()&&
      $(cells[3]).text() === $(cells[6]).text()&&
      $(cells[0]).text() !== ""
                  
       ){
          playerWin(player)


 }else if  (
     $(cells[1]).text() === $(cells[4]).text()&&
     $(cells[4]).text() === $(cells[7]).text()&&
     $(cells[1]).text() !== ""
                        
     ){
      playerWin(player)


 }else if  (
    $(cells[2]).text() === $(cells[5]).text()&&
    $(cells[5]).text() === $(cells[8]).text()&&
    $(cells[2]).text() !== ""
                           
      ){
        playerWin(player)     
        
  //مائل 
//0 4 8 & 2 4 6 
}else if  (
    $(cells[0]).text() === $(cells[4]).text()&&
    $(cells[4]).text() === $(cells[8]).text()&&
    $(cells[0]).text() !== ""
                       
    ){
     playerWin(player)  

 }else if  (
    $(cells[2]).text() === $(cells[4]).text()&&
    $(cells[4]).text() === $(cells[6]).text()&&
    $(cells[2]).text() !== ""
                           
     ){
     playerWin(player)  
     
    }{
       console.log  
    }


  }

function playerWin(theWinner){
    
    winnerSpan.text(theWinner)
  winnerPar.show(1000) 
  turnPar.hide(1000)
  restart.show(1000)
}


function restartTheGame(){
 location.reload()

}

cells.click(cellClicked )
restart.click(restartTheGame)

});