var close=document.getElementById("icon");
console.log(close);
// function slide1(){
//     if(close.style.left=="0px"){
//     close.style.left="-85px";
//     close.style.animation=" ";
//     }else{
//         close.style.left="0px";
//     }
// }
function slide1(){
    if(close.classList=="icon"){
    close.classList.add('icon1');
    }else{
        close.classList.remove('icon1');
    }
}