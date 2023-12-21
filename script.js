let getBox = document.querySelectorAll(".box");
let getText = "X";
for(let getB of getBox){
    getB.addEventListener("click",(e)=>{
        if(getB == %2 != 0){
            getB.innerText = "X";
        }else{
            getB.innerText = "0";
        }
    })
}