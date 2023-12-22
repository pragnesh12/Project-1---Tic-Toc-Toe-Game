let getUsername1 = prompt("Enter player 1 Name : ");
let getUsername2 = prompt("Enter player 2 Name : ");
let getoddBox = document.querySelectorAll(".oddBox");
let getBox = document.querySelectorAll(".box");
let getevenBox = document.querySelectorAll(".evenBox");
let cross = getBox.innerText = "X";
let h3 = document.querySelector(".h3");
let resetButton = document.querySelector(".resetBtn");




let chances =   [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
            ];

getBox.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(cross === "X"){
            box.innerText = "X";
            
            cross = "O";
        }else{
            box.innerText = "O";
            cross = "X";
        }
        box.disabled = "true";

        getWinner();
    });
});
     
const disabledBtn = () => {
    for(let box of getBox){
        box.disabled = "true";
    }
}

const getWinner = () =>{
    for(let pattern of chances){
        let pt1 = getBox[pattern[0]].innerText;
        let pt2 = getBox[pattern[1]].innerText;
        let pt3 = getBox[pattern[2]].innerText;
        
        if(pt1&&pt2&&pt3 != ""){
            if(pt1==pt2 && pt2==pt3){
                if(pt1 == "X"){
                    h3.innerHTML = `🎉 Congratulations ${getUsername1} you are winner 🥳`;
                }else{
                    h3.innerHTML = `🎉 Congratulations ${getUsername2} you are winner 🥳`;
                }
                disabledBtn();
            }
        }
    }
};


resetButton.addEventListener("click",()=>{
    window.location.reload();
})